import React from "react";

const NewsHome = () => {
  const urls = [
    "https://s2-g1.glbimg.com/Mu9tTg4bj7LB4jvzf70fHVJb7xw=/0x0:2000x1334/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/P/d/SdmuaPShCFBphvdkcsaQ/juze-lukele-no-rancho-fundo.jpg",
    "https://s2-g1.glbimg.com/M1sQesX9WmmN1KqbwXpDTIiHNRM=/0x0:683x421/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/B/9/ullUrVQDun3JyMS0UjDQ/zecapagodinhodjonga.jpg",
    "https://s2-g1.glbimg.com/yiF0S6Rl4hM3dMxxeEmMVug0h0c=/0x0:1280x853/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/l/KAv5VjSbCUVMK8Aos8uA/whatsapp-image-2019-05-04-at-07.23.16-1-.jpeg",
    "https://s2-g1.glbimg.com/mlWRnnRc-o7ywLSQFUArvDUTeas=/0x0:1402x1402/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/s/4/YPawfwTlqZKWmM5dLWaQ/ferrugem-steff-lima.jpg",
  ];

  const manchetes = [
    "Juzé & Lukete vão do aboio à bossa em EP lançado no embalo do retorno dos cantadores à novela ‘No rancho fundo’",
    "Zeca Pagodinho volta a saudar Ogum com versos de Jorge Ben Jor em gravação ao vivo com o rapper Djonga",
    "Lauryn Hill fará show em SP para comemorar 50 anos do famoso baile de black music Chic Show",
    "Ferrugem reúne a Turma do Pagode no álbum em que festeja dez anos na roda",
  ];

  return (
    <div>
      <h1
        className="text-5xl text-center mb-10"
        style={{ textShadow: "2px 2px 5px #9333ea" }}
      >
        Oque rola no mundo da música?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-10 ">
        {urls.map((url, index) => {
          return (
            <div
              className="flex flex-col cursor-pointer bg-rosa ease-in-out duration-300 hover:scale-105 hover:bg-roxo hover:shadow-2xl tra hover:shadow-purple-500"
              style={{
                height: "50vh",
              }}
            >
              <img
                src={url}
                alt=""
                style={{ width: "100%", height: "60%", objectFit: "cover" }}
              />
              <p className="text-2xl py-5 text-white font-bold px-10 ">
                {manchetes[index]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsHome;
