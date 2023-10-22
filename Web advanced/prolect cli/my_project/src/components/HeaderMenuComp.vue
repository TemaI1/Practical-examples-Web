<template>
    <div>
        <header class="header center">
            <div class="header_left">
                <img class="header_left_img" src="../assets/logo.jpg" alt="logo">
                <h2 class="header_left_title">Interno</h2>
            </div>
            <div class="header_right">
                <h2 class="header_right_link">Home</h2>
                <h2 class="header_right_link">Project</h2>
                <h2 class="header_right_link">Blog</h2>
            </div>
        </header>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
}

.center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
}

.header {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;

    &_left {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;

        &_img {
            width: 40px;
            height: 40px;
        }

        &_title {
            color: #292F36;
            font-size: 40px;
            font-weight: 400;
        }

        &_title:hover {
            cursor: pointer;
        }
    }

    &_right {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;

        &_link {
            color: #292F36;
            font-size: 20px;
            font-weight: 400;
        }

        &_link:hover {
            cursor: pointer;
            color: #88193c;
        }
    }
}
</style>