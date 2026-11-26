package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.GET("/ping", func(c *gin.Context) {
		c.String(http.StatusOK, "ok")
	})

	// r.POST("/login", func(c *gin.Context) {
	// 	c.JSON(http.StatusOK, gin.H{})
	// })
	r.Run(":3000")
}
