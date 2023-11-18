<template>
    <div>
        <section class="details_show">
        </section>
        <div class="details_content center">
            <h3 class="details_content_title">Minimal Look Bedrooms</h3>
            <p class="details_content_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis
                dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida
                dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus
                bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus
                ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante
                vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt
                ligula id purus porttitor.</p>
        </div>

        <div id="carouselExampleControls" class="carousel slide center mt-3" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/content_photo_10.png" class="d-block w-100" alt="photo"
                        style="max-width: 500px; max-height: 500px;">
                </div>
                <div class="carousel-item">
                    <img src="../assets/content_photo_10.png" class="d-block w-100" alt="photo"
                        style="max-width: 500px; max-height: 500px;">
                </div>
                <div class="carousel-item">
                    <img src="../assets/content_photo_10.png" class="d-block w-100" alt="photo"
                        style="max-width: 500px; max-height: 500px;">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

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

.details_show {
    margin-top: 30px;
    padding-top: 300px;
    background-image: url(../assets/details_show_2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.details_content {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;

    &_title {
        color: #292F36;
        font-size: 50px;
        font-weight: 400;
    }

    &_text {
        color: #4D5053;
        font-size: 22px;
        font-weight: 400;
    }
}
</style>