import ScrollToTop from "../components/ScrollToTop";
import useTitle from "../components/useTitle";

const beliefsData = [
  {
    img: "https://res.cloudinary.com/df17ci9pu/image/upload/v1752491177/1_jd5dx3.png",
    title: "1. the bible",
    desc: "We believe in the divine inspiration and authority of the Holy Scriptures. That the Bible is infallible in its declaration, final in its authority, all-sufficient in its provisions and comprehensive in its sufficiency (2 Timothy 3:16; 2 Peter 1:21).",
  },
  {
    img: "https://res.cloudinary.com/df17ci9pu/image/upload/v1752491177/2_ajnhpo.png",
    title: "2. one true God",
    desc: "We believe in the existence of the One True God, Elohim, Maker of the whole universe; indefinable, but revealed as Triune Godhead – Father, Son and Holy Spirit – one in nature, essence and attributes; Omnipotent, Omniscient and Omnipresent (Genesis 1:1; Matthew 3:16-17; 2 Corinthians 13:14; Matthew 28:19; Genesis 1:26)",
  },
  {
    img: "https://res.cloudinary.com/df17ci9pu/image/upload/v1752491177/3_ttkjt6.png",
    title: "3. man's depraved nature",
    desc: "We believe that: “all men have sinned and come short of the glory of God;” are subject to eternal punishment; and need repentance and regeneration (Genesis 3:1-19; Isaiah 53:6)",
  },
  {
    img: "https://res.cloudinary.com/df17ci9pu/image/upload/v1752491178/4_h6tdtz.png",
    title: "4. the saviour",
    desc: "We believe that man’s need of a Saviour has been met in the person of Jesus Christ, because of His deity, virgin birth, sinless life, atoning death, resurrection and ascension; His abiding intercession and second coming (John 8:46; 14:30; Colossians 1:15; 2 Corinthians 5:19; Romans 3:25; Acts 2:36; Philippians 2:9-11; 1 Thessalonians 4:3)",
  },
  {
    img: "https://res.cloudinary.com/df17ci9pu/image/upload/v1752491178/5_qbdtbi.png",
    title: "5. repentance, justification & sanctification",
    desc: "We believe that all men have to repent of and confess their sins before God, and believe in the vicarious death of Jesus Christ to be justified before God. We believe in the sanctification of the believer through the working of the Holy Spirit and in God’s gift of eternal life to the believer (Luke 15:7; Acts 2: 38; Romans 4:25; 5:16; 1 Corinthians 1:30; 1 Thessalonians 4: 3)",
  },
  {
    img: "https://res.cloudinary.com/df17ci9pu/image/upload/v1752491178/6_vxwu7k.png",
    title: "6. the sacraments of baptism & the lords supper",
    desc: "We believe in the Sacrament of Baptism by immersion as a testimony of a convert who has attained a responsible age of about 13 years (Luke 3:21; Mark 16:16). [Infants and children are not baptized but are dedicated to the Lord] (Luke 2:22-24, 34; Mark 10:16). We believe in the Sacrament of the Lord’s Supper which should be partaken of by all members who are in full fellowship (Luke 22:19-20; Matthew 26:21-29; Acts 20:7)",
  },
  {
    img: "https://res.cloudinary.com/df17ci9pu/image/upload/v1752491178/7_ggqxmw.png",
    title: "7. baptism, gifts & fruit of the holy spirit",
    desc: "We believe in the Baptism of the Holy Spirit for believers with signs following; and in the operation of the gifts and the fruit of the Holy Spirit in the lives of believers (1 Corinthians 12:8-11; Mark 16:17; Acts 2:4; Galatians 5:22)",
  },
  {
    img: "https://res.cloudinary.com/df17ci9pu/image/upload/v1752491179/8_faovai.png",
    title: "8. divine healing",
    desc: "We believe that the healing of sickness and disease is provided for God’s people in the atonement. The Church is, however, not opposed to soliciting the help of qualified medical practitioners (2 Kings 20:7; Mathew 9:12; Luke 10:34; Colossians 4:14)",
  },
  {
    img: "https://res.cloudinary.com/df17ci9pu/image/upload/v1752491179/9_m6wto5.png",
    title: "9. tithes & offering",
    desc: "We believe in tithing and in the giving of free-will offerings towards the cause of carrying forward the Kingdom of God. We believe that God blesses a cheerful giver (Genesis 14:18-20; 28:20-22; Malachi 3:6-10; Mathew 23:23; Acts 20:35; 1 Corinthians 16:1-3; 2 Corinthians 9:1-9)",
  },
  {
    img: "https://res.cloudinary.com/df17ci9pu/image/upload/v1752491179/10_eydoie.png",
    title: "10. the second coming & the next life",
    desc: "We believe in the Second Coming of Christ and the Resurrection of the dead, both the saved and the unsaved – they that are saved, to the resurrection of life; and the unsaved, to the resurrection of damnation (Mark 13: 26; Daniel 12:2; John 5: 28-29; Acts 1:11; 10:42; Romans 2:7-11; 6:23)",
  },
  {
    img: "https://res.cloudinary.com/df17ci9pu/image/upload/v1752491180/11_undsyj.png",
    title: "11. marriage & family life",
    desc: "We believe in the institution of marriage as a union established and ordained by God for the lifelong, intimate relationship between a man as husband and a woman as wife as biologically defined at birth. We believe that God instituted marriage primarily for mutual help, fellowship and comfort that one ought to have for the other and for honourable procreation of children, and their training in love, obedience to the Lord and responsible citizenship. (Genesis 2:18, 21-25; Matthew 19:4-6; 1 Corinthians 7:1-2).",
  },
];

const BeliefsPage = () => {
  useTitle("Beliefs");
  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-500 to-teal-400 uppercase p-10 md:p-20 font-bold text-4xl md:text-7xl text-gray-100 leading-tight text-center bebas">
        our beliefs & principles
      </div>
      <div className="p-6 md:p-32 space-y-12">
        {beliefsData.map(({ img, title, desc }, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            <img
              src={img}
              alt={title}
              className="rounded shadow-lg w-full max-w-xs md:max-w-[150px] object-contain"
            />
            <div className="p-4 md:p-10">
              <h3 className="uppercase font-bold text-xl">{title}</h3>
              <p className="mt-2 text-sm md:text-base">{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <ScrollToTop />
    </div>
  );
};

export default BeliefsPage;
