import { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

const beliefs = [
  {
    title: "ABOUT GOD",
    content:
      "God is the Creator and Ruler of the universe. He has eternally existed in three personalities: the Father, the Son, and the Holy Spirit. These three are co-equal and are one God.",
    scriptures:
      "Genesis 1:1, 26, 27; 3:22 || Psalm 90:2 || Matthew 28:19 || 1 Peter 1:2 || 2 Corinthians 13:14",
  },
  {
    title: "ABOUT YOU",
    content:
      "You are made in the spiritual image of God to be like Him in character. You are the supreme object of God’s creation and love. Although you have tremendous potential for good, you are marred by an attitude of disobedience towards God called “sin.” This attitude separates you from God until the relationship is restored through a personal commitment to Jesus Christ.",
    scriptures:
      "Genesis 1:27 || Psalms 8:3-6 || Isaiah 53:6 || Romans 3:23 || Isaiah 59: 1-2",
  },
  {
    title: "ABOUT ETERNITY",
    content:
      "Humans were created to exist forever. We will either exist eternally separated from God by sin, or in union with God through forgiveness and salvation. To be eternally separated from God is hell. To be eternally in union with Him is eternal life. Heaven and hell are places of eternal existence.",
    scriptures:
      "John 3:16 || 1 John 2:25; 5:11-13 || Romans 6:23 || Revelation 20:15",
  },
  {
    title: "ABOUT JESUS CHRIST",
    content:
      "Jesus Christ is the Son of God. He is co-equal with the Father. Jesus lived a sinless human life and offered Himself as the perfect sacrifice for the sins of all people by dying on a cross. He arose from the dead after three days to demonstrate His power over sin and death. He ascended to Heaven’s glory and will return again to earth to reign as King of Kings, and Lord of Lords.",
    scriptures:
      "Matthew 1:22-23 || Isaiah 9:6 || John 1:1-5; 14:10-30 || Hebrews 4:14-15 || 1 Corinthians 15: 3-4 || Romans 1:3-4 Acts 1:9-11 || 2 Timothy 6:14-15 || Titus 2:13",
  },
  {
    title: "ABOUT THE HOLY SPIRIT",
    content:
      "The Holy Spirit is equal with the Father and the Son as God. He is present in the world to make people aware of their need for Jesus Christ. He also lives in every Christian from the moment of salvation. He provides the Christian with power for living, understanding of spiritual truth, and guidance in doing what is right. The Christian seeks to live under His control daily. We also believe the Holy Spirit empowers believers with gifts and abilities to be used in service to others.",
    scriptures:
      "2 Corinthians 3:17 || John 16:7-13; 14:16-17 || Acts 1:8 || 2 Corinthians 2:12; 3:16 || Ephesians 1:13 Galatians 5:25 || Ephesians 5:18 1 Corinthians 12:4-11 Romans 8:26",
  },
  {
    title: "ABOUT SALVATION",
    content:
      "Salvation is a gift from God to humanity. We can never make up for our sin by self-improvement or good works. Only by trusting in Jesus Christ as God’s offer of Forgiveness can we be saved from sin’s penalty. Eternal life begins the moment one receives Jesus Christ into his life by faith.",
    scriptures:
      "Romans 6:23 || Ephesians 2:8-9 || John 14:6; 1:12 || Titus 3:5 || Galatians 3:26 || Romans 5:1",
  },
  {
    title: "ABOUT THE BIBLE",
    content:
      "The Bible is God’s Word to all people. It was written by human authors under the supernatural guidance of the Holy Spirit. It is the supreme source of truth for Christian beliefs and living. Because it is inspired by God, it is truth without any mixture of error.",
    scriptures:
      "2 Timothy 3:16 || 2 Peter 1:20-21 || 2 Timothy 1:13 || Psalms 119:105, 160; 12:6 || Proverbs 30:5",
  },
];

const WhatWeBelieve = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  useEffect(() => {
    contentRefs.current.forEach((el, idx) => {
      if (el) {
        el.style.maxHeight = openIndex === idx ? el.scrollHeight + "px" : "0px";
      }
    });
  }, [openIndex]);

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight uppercase mb-4">
        What We Believe
      </h1>
      <p className="text-gray-700 text-sm md:text-xl max-w-xl mx-auto mb-10">
        See how we view God, Jesus, the Bible, and many other aspects of our
        faith. Firmly rooted in scripture, the beliefs of Northampton PIWC guide
        our decisions as a church and motivate us to reach others with the love
        of Jesus at all costs.
      </p>

      <div className="border-t border-gray-300">
        {beliefs.map((belief, index) => (
          <div key={index} className="border-b border-gray-300 text-left">
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full flex justify-between items-center py-4 font-black text-lg md:text-4xl tracking-tight"
            >
              {belief.title}
              {openIndex === index ? <Minus /> : <Plus />}
            </button>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight: openIndex === index ? "1000px" : "0px" }}
            >
              <div className="pb-4 text-gray-700">
                <p className="mb-2">{belief.content}</p>
                <p className="text-sm text-gray-500 italic">
                  {belief.scriptures}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeBelieve;
