package main

import (
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"

	_ "src/docs"
)

type LoginResponse struct {
	Token string `json:"token" example:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."`
}

type ErrorResponse struct {
	Error string `json:"error"`
}

// @title AREA POC API
// @version 1.0
// @description POC backend implementing GET /ping and POST /login.
// @BasePath /

// Ping godoc
// @Summary Ping
// @Produce plain
// @Success 200 {string} string "ok"
// @Router /ping [get]
func ping(c *gin.Context) {
	c.String(http.StatusOK, "ok")
}

// Login godoc
// @Summary Login
// @Produce json
// @Success 200 {object} LoginResponse
// @Failure 500 {object} ErrorResponse
// @Router /login [post]
func login(c *gin.Context) {
	claims := jwt.MapClaims{"time": time.Now().Unix()}
	token, err := jwt.NewWithClaims(jwt.SigningMethodHS256, claims).SignedString([]byte(os.Getenv("JWT_SECRET")))
	if err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{Error: err.Error()})
		return
	}
	c.JSON(http.StatusOK, LoginResponse{Token: token})
}

func main() {
	r := gin.Default()

	r.GET("/ping", ping)
	r.POST("/login", login)
	swaggerHandler := ginSwagger.WrapHandler(swaggerFiles.Handler)
	r.GET("/docs/*any", func(c *gin.Context) {
		if c.Param("any") == "/" {
			c.Redirect(http.StatusFound, "/docs/index.html")
			return
		}
		swaggerHandler(c)
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}
	r.Run(":" + port)
}
