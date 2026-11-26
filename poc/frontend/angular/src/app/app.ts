import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
    imports: [RouterOutlet],
    selector: 'app-root',
    templateUrl: './app.html',
})
export class App {
    private readonly http = inject(HttpClient);

    protected readonly ip = signal('');

    protected readonly todo_input = signal('');
    protected readonly todos = signal<string[]>([]);

    protected addTodo(): void {
        const title = this.todo_input();

        this.todos.update((todos) => [...todos, title]);
        this.todo_input.set('');
    }

    protected removeTodo(index: number): void {
        this.todos.update((todos) => todos.filter((_, i) => i !== index));
    }

    constructor() {
        this.http
            .get('https://httpbin.org/anything')
            .pipe(
                catchError((err: any) => {
                    console.error(err);
                    return of(null);
                }),
            )
            .subscribe((response: any) => {
                if (response) {
                    this.ip.set(response["origin"]);
                }
            });
    }
}
