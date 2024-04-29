import React from "react";
import Container from "../Container";
import SectionTitle from "./SectionTitle";
import random from "../../assets/random.png";

const NewsCard = ({ text }) => (
  <div className="w-[320px] px-4 py-6 bg-white rounded-md news_card_shadow">
    <p className="text-[#5B6469] font-bold text-[15px]">{text} </p>
    <div className="pt-7 text-[13px] flex items-center gap-2">
      <img src={random} alt="person" className="w-10 h-10 rounded-full" />
      <div>
        <h1 className="font-medium">Joy Arnold</h1>
        <p className="text-[#BFBFC8]">@Joy Arnold222</p>
      </div>
    </div>
  </div>
);


const NewsCard1 = ({ text }) => (
  <div className="w-[320px] px-4 py-6 bg-white rounded-md news_card_shadow">
    <p className="text-[#5B6469] font-bold text-[15px]">{text} </p>
    <div className="pt-7 text-[13px] flex items-center gap-2">
      <img src={random} alt="person" className="w-10 h-10 rounded-full" />
      <div>
        <h1 className="font-medium">Chetana More</h1>
        <p className="text-[#BFBFC8]">@Chetana_More_07</p>
      </div>
    </div>
  </div>
);

const NewsCard2 = ({ text }) => (
  <div className="w-[320px] px-4 py-6 bg-white rounded-md news_card_shadow">
    <p className="text-[#5B6469] font-bold text-[15px]">{text} </p>
    <div className="pt-7 text-[13px] flex items-center gap-2">
      <img src={random} alt="person" className="w-10 h-10 rounded-full" />
      <div>
        <h1 className="font-medium">Yogini More</h1>
        <p className="text-[#BFBFC8]">@Yogini__18</p>
      </div>
    </div>
  </div>
);

const NewsCard3 = ({ text }) => (
  <div className="w-[320px] px-4 py-6 bg-white rounded-md news_card_shadow">
    <p className="text-[#5B6469] font-bold text-[15px]">{text} </p>
    <div className="pt-7 text-[13px] flex items-center gap-2">
      <img src={random} alt="person" className="w-10 h-10 rounded-full" />
      <div>
        <h1 className="font-medium">Sakshi Thorat</h1>
        <p className="text-[#BFBFC8]">@Sakshi_Thorat16</p>
      </div>
    </div>
  </div>
);

const NewsCard4 = ({ text }) => (
  <div className="w-[320px] px-4 py-6 bg-white rounded-md news_card_shadow">
    <p className="text-[#5B6469] font-bold text-[15px]">{text} </p>
    <div className="pt-7 text-[13px] flex items-center gap-2">
      <img src={random} alt="person" className="w-10 h-10 rounded-full" />
      <div>
        <h1 className="font-medium">Shiv Sonawane</h1>
        <p className="text-[#BFBFC8]">@ShivSonawane_12</p>
      </div>
    </div>
  </div>
);

const NewsCard5 = ({ text }) => (
  <div className="w-[320px] px-4 py-6 bg-white rounded-md news_card_shadow">
    <p className="text-[#5B6469] font-bold text-[15px]">{text} </p>
    <div className="pt-7 text-[13px] flex items-center gap-2">
      <img src={random} alt="person" className="w-10 h-10 rounded-full" />
      <div>
        <h1 className="font-medium">Shubham Bhadane</h1>
        <p className="text-[#BFBFC8]">@Shubham_21</p>
      </div>
    </div>
  </div>
);


export default function Stories() {
  return (
    <section className="my-14">
      <Container>
        <div className="pt-14 pb-4 h-[700px] overflow-auto bg-[#F7F7F7] flex items-center lg:flex-nowrap flex-wrap gap-1">
          <article className="lg:w-1/2 w-full lg:pb-0 pb-4 flex flex-col lg:items-start items-center lg:ml-14 lg:mt-52">
            <SectionTitle title="success stories" />
            <p className="text-[#5B6469]">Let's see what people say about us</p>
          </article>
          <div className="flex gap-4 sm:flex-nowrap flex-wrap lg:w-1/2 mx-auto">
            <div className="rounded-md w-full flex flex-col gap-3 items-center">
              <NewsCard text=" Life is full of beauty. Notice it. Notice the bumble bee, the small child, and the smiling faces. Smell the rain, and feel the wind. Live your life to the fullest potential, and fight for your dreams." />
              <NewsCard1 text="Life is best when you’re camping. " />
              <NewsCard2 text="Walking on paths paved by nature’s grace. n the silence of the trees, I find my voice" />
            </div>
            <div className="rounded-md w-full flex flex-col gap-3 items-center">
              <NewsCard3 text="Life is only half lived if you have never got in a car and driven off on the open road." />
              <NewsCard4 text="Sunshine is the best medicine. Happiness is a day at the beach" />
              <NewsCard5 text="It is life, I think, to watch the water, Rivers are roads that move and carry us along with them" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
