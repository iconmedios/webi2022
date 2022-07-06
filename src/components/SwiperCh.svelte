<script  lang="ts">
    // Import Swiper Svelte components
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    // import { EffectFade } from 'swiper';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';    
    
    
    const onProgress = (e:CustomEvent) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    }

    /* "swiper" event emitted with "swiper" instance argument */
    const onSwiper = (e:CustomEvent) => {
      const [swiper] = e.detail;
      console.log(swiper);
    }
  
    
    </script>

<Swiper
on:swiper={onSwiper}
on:slideChange={() => console.log('slide change')}
on:progress={onProgress}
spaceBetween={0}
slidesPerView={1}
navigation
pagination

on:slideChange={() => console.log('slide change')}

>
<SwiperSlide >
    <div class="slide">Slide 1</div> 
</SwiperSlide>
<SwiperSlide> <div class="slide"> Slide 2 </div></SwiperSlide>
<SwiperSlide><div class="slide">Slide 3   </div></SwiperSlide>
<SwiperSlide><div class="slide">Slide 4   </div></SwiperSlide>
...
</Swiper>




<style>

    .slide{ width:100%; height:300px; background: green; display:flex; align-items: center; justify-content: center;}

</style>


