<template>
    <div>
        <footer class="footer">
            <div class="footer_left">
                <div class="footer_left_logotext">
                    <img src="../assets/logo.jpg" alt="logo" width="30px" height="30px">
                    <p class="footer_left_logotext_text">Interno</p>
                </div>
                <p class="footer_left_text">It is a long established fact that a reader will be distracted lookings.</p>
                <div class="footer_left_icon">
                    <svg class="footer_left_icon_item" xmlns="http://www.w3.org/2000/svg" height="2em"
                        viewBox="0 0 512 512">
                        <path
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                    <svg class="footer_left_icon_item" xmlns="http://www.w3.org/2000/svg" height="2em"
                        viewBox="0 0 512 512">
                        <path
                            d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                    </svg>
                </div>
            </div>
            <div class="footer_mid">
                <p class="footer_mid_title">Pages</p>
                <p class="footer_mid_link">Home</p>
                <p class="footer_mid_link">Project</p>
                <p class="footer_mid_link">Blog</p>
            </div>
            <div class="footer_right">
                <p class="footer_right_title">Contact</p>
                <p class="footer_right_text">55 East Birchwood Ave. Brooklyn, New York 11201</p>
                <p class="footer_right_text">contact@interno.com</p>
                <p class="footer_right_text">(123) 456 - 7890</p>
            </div>
        </footer>
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

.footer {
    margin-top: 80px;
    margin-bottom: 80px;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: space-evenly;

    &_left {
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 300px;

        &_logotext {
            display: flex;
            align-items: center;
            gap: 5px;

            &_text {
                color: #292F36;
                font-size: 40px;
                font-weight: 400;
            }

            &_text:hover {
                cursor: pointer;
            }
        }

        &_text {
            color: #4D5053;
            font-size: 22px;
            font-weight: 400;
        }

        &_icon {
            display: flex;
            gap: 30px;

            &_item {
                fill: rgb(113, 138, 169);
            }

            &_item:hover {
                cursor: pointer;
                fill: #88193c;
            }
        }
    }

    &_mid {
        display: flex;
        flex-direction: column;
        gap: 25px;

        &_title {
            color: #292F36;
            font-size: 25px;
            font-weight: 400;
        }

        &_link {
            color: #4D5053;
            font-size: 22px;
            font-weight: 400;
        }

        &_link:hover {
            cursor: pointer;
            color: #88193c;
        }
    }

    &_right {
        display: flex;
        flex-direction: column;
        gap: 25px;
        max-width: 300px;

        &_title {
            color: #292F36;
            font-size: 25px;
            font-weight: 400;
        }

        &_text {
            color: #4D5053;
            font-size: 22px;
            font-weight: 400;
        }
    }
}
</style>