Vue.component('component-all-content', {
    template: `
    <div class="details_content_left">
        <h3 class="details_content_left_title">Let’s Get Solution for Building Construction Work</h3>
        <img class="details_content_left_img" src="img/details_content_photo.png" alt="photo">
            <div class="details_content_left_underimg">
                <p class="details_content_left_underimg_text">26 December,2022</p>
                <p class="details_content_left_underimg_text">Interior / Home / Decore</p>
            </div>
        <p class="details_content_left_text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem unde dicta, quae assumenda, odio quis ipsam dolor excepturi eos inventore ad, tenetur necessitatibus illum in. Ea, voluptatibus officia laudantium praesentium qui accusamus tempora provident. Reprehenderit, atque saepe maxime, labore harum neque ipsam a sapiente facilis aperiam dolore quis est excepturi corporis obcaecati soluta. Odio incidunt suscipit cupiditate fuga, voluptas porro, officiis a beatae ducimus unde autem optio illo vero. Explicabo sed et odit tempore doloremque natus placeat quae, ea voluptate porro fugiat necessitatibus repellendus exercitationem animi itaque, magni, deserunt eos nemo provident earum facere accusamus unde iste! Aliquam dolorem nemo a hic ex doloribus. Esse, expedita fugit ipsa iure accusamus perspiciatis fugiat quam magni labore repellendus cupiditate libero officiis commodi!</p>
    </div>
    `
});

Vue.component('component-gap', {
    template: `
    <div class="details_content_left_gap">
        <img class="details_content_left_gap_photo" src="img/details_commas.jpg" alt="photo" width="80px" height="60px">
        <h3 class="details_content_left_gap_title">The details are not the details. They make the design.</h3>
    </div>
    `
});

Vue.component('component-content', {
    template: `
    <div class="details_content_left_second">
        <h3 class="details_content_left_title">Let’s Get Solution for Building Construction Work</h3>
        <p class="details_content_left_text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem unde dicta, quae assumenda, odio quis ipsam dolor excepturi eos inventore ad, tenetur necessitatibus illum in. Ea, voluptatibus officia laudantium praesentium qui accusamus tempora provident. Reprehenderit, atque saepe maxime, labore harum neque ipsam a sapiente facilis aperiam dolore quis est excepturi corporis obcaecati soluta. Odio incidunt suscipit cupiditate fuga, voluptas porro, officiis a beatae ducimus unde autem optio illo vero. Explicabo sed et odit tempore doloremque natus placeat quae, ea voluptate porro fugiat necessitatibus repellendus exercitationem animi itaque, magni, deserunt eos nemo provident earum facere accusamus unde iste! Aliquam dolorem nemo a hic ex doloribus. Esse, expedita fugit ipsa iure accusamus perspiciatis fugiat quam magni labore repellendus cupiditate libero officiis commodi!</p>
        <img class="details_content_left_img" src="img/details_content_photo_2.png" alt="photo">
    </div>
    `
});

Vue.component('component-sort-content', {
    data() {
        return {
            btnList: [
                {
                    name:'Kitchen'
                },
                {
                    name:'Bedroom'
                },
                {
                    name:'Building'
                },
                {
                    name:'Architecture'
                }
            ],
        }
    },
    template: `
    <div class="details_content_right">
        <h3 class="details_content_right_title">Tags</h3>
        <div v-for="(btn, index) in btnList" :key="index" class="details_content_right_buttons">
            <button @click="tellName" class="details_content_right_buttons_btn">{{btn.name}}</button>
        </div>
    </div>
    `,
    methods: {
        tellName() {
            alert(`you pressed the button`);
        },
    }
});
   
new Vue({
    el: '#all_content',
})

new Vue({
    el: '#gap'
})

new Vue({
    el: '#content'
})

new Vue({
    el: '#sort_content',
})
    