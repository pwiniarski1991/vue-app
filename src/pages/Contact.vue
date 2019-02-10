<template>
    <section>
        <header>
            <h2>Contact</h2>
        </header>
        <form method="POST">
            <div class="formfield">
                <label for="name">Imię i Nazwisko: </label>
                <input type="text" name="fullname" id="name">                 
            </div>
            <div class="formfield">
                <label for="email">Email: </label>
                <input type="text" name="email" id="email">                 
            </div>
            <div class="formfield">
                <label for="subject">Temat: </label>
                <input type="text" name="fullname" id="name">                 
            </div>
            <input type="submit" name="send" value="Wyślij">
        </form>
        <footer>
            <p> Please Contact us if you have something to share </p>
        </footer>
    </section>
</template>

<script>
export default {
    props: ['title','desc'],
    name: 'Contact'
}
</script>
