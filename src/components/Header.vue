<template>
    <div>
        <!--Navbar-->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark indigo">

            <!-- Additional container -->
            <div class="container">

                <!-- Navbar brand -->
                <router-link class="navbar-brand" to="/">
                    <img src="../assets/logo.png" alt="" width="50">
                </router-link>

                <!-- Collapse button -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Collapsible content -->
                <div class="collapse navbar-collapse" id="basicExampleNav">
                    <!-- Links -->
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <router-link  class="nav-link text-white" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link  class="nav-link text-white" to="/products">Produits</router-link>
                        </li>
                    </ul>
                    <!-- Links -->
                </div>
                <!-- Collapsible content -->

            </div>
            <!-- Additional container -->

        </nav>
        <!--/.Navbar-->
    </div>
</template>

<script>
    export default {
        name: 'header-app',
    }
</script>