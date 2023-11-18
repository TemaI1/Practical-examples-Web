<template>
    <div>
        <section class="project_show">
            <div class="project_show_content">
                <h2 class="project_show_content_title">Our Project</h2>
                <p class="project_show_content_text">Home / Project</p>
            </div>
        </section>
        <section class="catalog center">
            <div class="catalog_switch_buttons">
                <button class="catalog_switch_buttons_btn" @click="switchBathroom">Bathroom</button>
                <button class="catalog_switch_buttons_btn" @click="switchBedRoom">Bed Room</button>
                <button class="catalog_switch_buttons_btn" @click="switchKitchen">Kitchen</button>
                <button class="catalog_switch_buttons_btn" @click="switchLivingArea">Living Area</button>
            </div>
            <div class="catalog_content">
                <div class="catalog_content_item" v-for="item in defoultItems" :key="item">
                    <img class="catalog_content_item_img" :src="item.photo" alt="photo">
                    <div class="catalog_content_item_under">
                        <div class="catalog_content_item_under_left">
                            <p class="catalog_content_item_under_title">{{ item.title }}</p>
                            <p class="catalog_content_item_under_text">{{ item.text }}</p>
                        </div>
                        <div class="catalog_content_item_under_right">
                            <img src="../assets/arrow.jpg" alt="arrow" width="50px">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="news center">
            <div class="news_scrol">
                <p class="news_scrol_num">01</p>
                <p class="news_scrol_num">02</p>
                <p class="news_scrol_num">03</p>
                <p class="news_scrol_num">04</p>
                <img class="news_scrol_arrow" src="../assets/arrow_white.png" alt="icon" width="55px" height="55px">
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            defoultItems: [
                {
                    photo: 'https://i.pinimg.com/736x/85/e2/85/85e28547a1f3e51b2c6bdb68746e4acc.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Bedroom',
                },
                {
                    photo: 'https://i.pinimg.com/736x/82/03/18/820318c45d26e1dc56bfd5c7643ad1cd.jpg',
                    title: 'Modern Bedroom',
                    text: 'Decor / Bedroom second',
                },
                {
                    photo: 'https://i.pinimg.com/736x/c5/6c/e5/c56ce551b61b835a6f054ddc8a7d2134--luxury-bathrooms-dream-bathrooms.jpg',
                    title: 'System Table',
                    text: 'Decor / Bedroom third',
                },
                {
                    photo: 'https://sun9-4.userapi.com/impg/-3uHz_mQrgs-gcdj_n1-G_84IxzVG9momleyOQ/DZW6I78R7iE.jpg?size=400x600&quality=96&sign=faee03c6155ee2aeaf24afa15891a2ee&c_uniq_tag=r42afklS5UbkFGuS4DINL2VZ3Q91G4WULRs2yd3orp0&type=album',
                    title: 'Classic Bedroom',
                    text: 'Decor / Bedroom fourth',
                }
            ],
            contentBathroom: [
                {
                    photo: 'https://i.pinimg.com/736x/85/e2/85/85e28547a1f3e51b2c6bdb68746e4acc.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Bedroom',
                },
                {
                    photo: 'https://i.pinimg.com/736x/82/03/18/820318c45d26e1dc56bfd5c7643ad1cd.jpg',
                    title: 'Modern Bedroom',
                    text: 'Decor / Bedroom second',
                },
                {
                    photo: 'https://i.pinimg.com/736x/c5/6c/e5/c56ce551b61b835a6f054ddc8a7d2134--luxury-bathrooms-dream-bathrooms.jpg',
                    title: 'System Table',
                    text: 'Decor / Bedroom third',
                },
                {
                    photo: 'https://sun9-4.userapi.com/impg/-3uHz_mQrgs-gcdj_n1-G_84IxzVG9momleyOQ/DZW6I78R7iE.jpg?size=400x600&quality=96&sign=faee03c6155ee2aeaf24afa15891a2ee&c_uniq_tag=r42afklS5UbkFGuS4DINL2VZ3Q91G4WULRs2yd3orp0&type=album',
                    title: 'Classic Bedroom',
                    text: 'Decor / Bedroom fourth',
                }
            ],
            contentBedRoom: [
                {
                    photo: 'https://i.pinimg.com/736x/65/62/66/656266784993c463e9d2bf054da5bfba.jpg',
                    title: 'Minimal Bed Room',
                    text: 'Decor / Bed Room',
                },
                {
                    photo: 'https://i.pinimg.com/736x/9f/bd/d9/9fbdd97a7c55095425f1b1802f89f20c.jpg',
                    title: 'Modern Bed Room',
                    text: 'Decor / Bed Room second',
                },
                {
                    photo: 'https://66.media.tumblr.com/485dd206bcbe5ec5d5e43a8250300a4e/tumblr_nlokmslidH1u7nuo6o1_400.jpg',
                    title: 'System Table Bed Room',
                    text: 'Decor / Bed Room third',
                },
                {
                    photo: 'https://i.pinimg.com/736x/28/2f/dd/282fdd2c2c9953fd9aedd398656c2cb4.jpg',
                    title: 'Classic Bed Room',
                    text: 'Decor / Bed Room fourth',
                }
            ],
            contentKitchen: [
                {
                    photo: 'https://i.pinimg.com/736x/b4/15/62/b41562874303c9a4a30ebfa6efc86353--white-wood-kitchens-white-kitchen-cabinets.jpg',
                    title: 'Minimal Kitchen',
                    text: 'Decor / Kitchen',
                },
                {
                    photo: 'https://i.pinimg.com/originals/4e/e1/e8/4ee1e8c56a7dcd0cfde70d2fda047c8d.jpg',
                    title: 'Modern Kitchen',
                    text: 'Decor / Kitchen second',
                },
                {
                    photo: 'https://i.pinimg.com/736x/96/dd/de/96dddeb37af5d162f4555fcb59232a0e.jpg',
                    title: 'System Table Kitchen',
                    text: 'Decor / Kitchen third',
                },
                {
                    photo: 'https://i.pinimg.com/736x/d8/9d/22/d89d2291f8fe028eb46b419091f4ad6a--kitchen-island-bench-kitchen-islands.jpg',
                    title: 'Classic Kitchen',
                    text: 'Decor / Kitchen fourth',
                }
            ],
            contentLivingArea: [
                {
                    photo: 'https://i.pinimg.com/736x/54/48/50/54485059e2c9e1d13ad699907a3274cf.jpg',
                    title: 'Minimal Living Area',
                    text: 'Decor / Living Area',
                },
                {
                    photo: 'https://i.pinimg.com/736x/fd/c7/03/fdc70311322fc96c40609a9e67217df4.jpg',
                    title: 'Modern Living Area',
                    text: 'Decor / Living Area second',
                },
                {
                    photo: 'https://images.dwell.com/photos-6191803854900514816/6407094736669421568-medium/from-the-living-area-floating-stairs-lead-up-to-the-second-and-third-floor-which-were-designed-as-two-compact-levels-stacked-above-the-wooden-house-volume-on-the-ground-floor.jpg',
                    title: 'System Table Living Area',
                    text: 'Decor / Living Area third',
                },
                {
                    photo: 'https://garantanapa.ru/wp-content/uploads/2021/02/highway-house_240715_04.jpg',
                    title: 'Classic Living Area',
                    text: 'Decor / Living Area fourth',
                }
            ],
        }
    },
    methods: {
        switchBathroom() {
            this.defoultItems = this.contentBathroom
        },
        switchBedRoom() {
            this.defoultItems = this.contentBedRoom
        },
        switchKitchen() {
            this.defoultItems = this.contentKitchen
        },
        switchLivingArea() {
            this.defoultItems = this.contentLivingArea
        }
    }
}; 
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

.project_show {
    margin-top: 30px;
    padding-top: 300px;
    background-image: url(../assets/project_show.png);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    &_content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background-color: #FFF;
        padding: 30px;
        border-radius: 30px 30px 0 0;

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
}

.catalog {
    margin-top: 50px;

    &_switch_buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;

        &_btn {
            padding: 25px 60px;
            border-radius: 15px;
            background: #F4F0EC;
            border: none;
            color: #292F36;
            font-size: 18px;
            font-weight: 600;
        }

        &_btn:hover {
            cursor: pointer;
            background: #CDA274;
            color: #F4F0EC;
        }
    }

    &_content {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;

        &_item {
            margin-top: 30px;

            &_under {
                display: flex;
                justify-content: space-between;
                align-items: center;

                &_title {
                    margin-top: 10px;
                    color: #292F36;
                    font-size: 25px;
                    font-weight: 400;
                }

                &_text {
                    margin-top: 5px;
                    color: #4D5053;
                    font-size: 22px;
                    font-weight: 400;
                }

                &_right:hover {
                    cursor: pointer;
                }
            }
        }
    }

}

.news {
    margin-top: 50px;

    &_text {
        &_title {
            text-align: center;
            color: #292F36;
            font-size: 50px;
            font-weight: 400;
        }

        &_subtitle {
            text-align: center;
            color: #4D5053;
            font-size: 22px;
            font-weight: 400;
        }
    }

    &_content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;

        &_color {
            background: #F4F0EC;
        }

        &_item {
            margin-top: 30px;
            border: 1px solid #E7E7E7;
            box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
            padding: 20px;
            border-radius: 30px;

            &_img {
                border-radius: 30px 30px 0 0;
            }

            &_under {
                display: flex;
                justify-content: space-between;
                align-items: end;
                max-width: 340px;

                &_title {
                    margin-top: 10px;
                    color: #292F36;
                    font-size: 25px;
                    font-weight: 400;
                }

                &_text {
                    margin-top: 40px;
                    color: #4D5053;
                    font-size: 16px;
                    font-weight: 400;
                }

                &_arrow:hover {
                    cursor: pointer;
                }
            }
        }
    }

    &_scrol {
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

        &_num {
            padding: 20px;
            border-radius: 100%;
            border: 1px solid #CDA274;
            color: #292F36;
            font-size: 16px;
            font-weight: 500;
        }

        &_num:hover {
            cursor: pointer;
            border: 1px solid #88193c;
        }

        &_arrow {
            background-color: #CDA274;
            padding: 1px;
            border-radius: 100%;
        }

        &_arrow:hover {
            cursor: pointer;
            background-color: #88193c;
        }
    }
}
</style>