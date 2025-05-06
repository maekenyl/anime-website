// 动漫数据
const animeData = [
  {
    title: "鬼灭之刃",
    image: "images/demon-slayer.jpg",
    description:
      "讲述少年炭治郎为了寻找让变成鬼的妹妹变回人类的方法，踏上斩鬼之旅的故事。",
    year: 2019,
  },
  {
    title: "进击的巨人",
    image: "images/attack-on-titan.jpg",
    description: "人类生活在被高墙包围的城市中，对抗着墙外的巨人威胁。",
    year: 2013,
  },
  {
    title: "你的名字",
    image: "images/your-name.jpg",
    description: "两名高中生神秘地交换身体，并试图寻找彼此的故事。",
    year: 2016,
  },
  {
    title: "海贼王",
    image: "images/one-piece.jpg",
    description: "少年路飞为了成为海贼王，与伙伴们一起展开的冒险故事。",
    year: 1999,
  },
  {
    title: "间谍过家家",
    image: "images/spy-family.jpg",
    description: "间谍、杀手和超能力者组成的临时家庭喜剧。",
    year: 2022,
  },
  {
    title: "咒术回战",
    image: "images/jujutsu-kaisen.jpg",
    description: "高中生虎杖悠仁吞下特级咒物后卷入咒术师世界的故事。",
    year: 2020,
  },
];

// 加载动漫卡片
function loadAnimeCards() {
  const container = document.getElementById("anime-container");

  animeData.forEach((anime) => {
    const card = document.createElement("div");
    card.className = "anime-card";

    card.innerHTML = `
            <img src="${anime.image}" alt="${anime.title}">
            <div class="anime-info">
                <h3>${anime.title} (${anime.year})</h3>
                <p>${anime.description}</p>
            </div>
        `;

    container.appendChild(card);
  });
}

// 页面加载完成后执行
document.addEventListener("DOMContentLoaded", loadAnimeCards);

