<script lang="ts">
    let todo_input = $state("");
    let todos: string[] = $state([]);

    function addTodo() {
        todos.push(todo_input);
        todo_input = "";
    }

    function removeTodo(index: number) {
        todos.splice(index, 1);
    }

    let ip = $state("");

    fetch("https://httpbin.org/anything")
        .then((res) => res.json())
        .then((data) => {
            ip = data["origin"];
        });
</script>

<h1 class="font-bold text-5xl">TODO</h1>
<p>My awesome TODO app for the AREA POC!</p>

<br />

<ul class="list-disc mx-7">
    {#each todos as todo, index}
        <div class="flex flex-row gap-2">
            <li>{todo}</li>
            <button class="border-2 px-2" onclick={() => removeTodo(index)}>Remove</button>
        </div>
    {/each}
</ul>

<br />

<div>
    <input
        class="border-2"
        type="text"
        bind:value={todo_input}
        onkeyup={(e) => {e.key === "Enter" ? addTodo() : null}}
        placeholder="Enter your TODO here!"
    />
    <button class="border-2 px-2" onclick={addTodo}>Add</button>
</div>

<footer>
    <h4>IP: {ip}</h4>
</footer>
