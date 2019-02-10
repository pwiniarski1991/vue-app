<template>
    <section>
        <header>
            <h2>Projects</h2>
        </header>
        <ul>
            <li v-for="project in projects" :key="project.desc">
                <a :href="project.to">{{ project.title }}</a>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    props: ['title','desc'],
    name: 'Projects',
    data() {
        return {
            projects: [
                { title: 'Todo', to: '/todo', img: './todo.jpg', desc: 'todo' },
                { title: 'Dynamic List', to: '/dynamic-list', img: './dynamic_list.jpg', desc: 'dynamic_list' }
            ]
        }
    }
}
</script>
