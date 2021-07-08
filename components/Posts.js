import Post from "./Post";
import elon from "../mainimages/elon.jpeg";
import eminem from "../mainimages/eminem.jpeg";
import weekend from "../mainimages/weekend.jpeg";
import steve from "../mainimages/steve.jpeg";
import linus from "../mainimages/linus.jpeg";
import cole from "../mainimages/cole.jpeg";
import elon1 from "../mainimages/dogecoin.jpeg";
import em1 from "../mainimages/slimshady.jpeg";
import week1 from "../mainimages/weekendpost.jpeg";
import steve1 from "../mainimages/stevepost.jpeg";
import linus1 from "../mainimages/linuspost.jpeg";
import cole1 from "../mainimages/colepost.jpeg";

function Posts() {
  return (
    <div>
      <Post
        name={"Elon Musk"}
        message={"You laugh at my memes, I laugh at your bank account"}
        profilePic={elon}
        postPic={elon1}
        timestamp={"3"}
      />
      <Post
        name={"Eminem"}
        message={"Will the real slim shady please stand up?"}
        profilePic={eminem}
        postPic={em1}
        timestamp={"10"}
      />
      <Post
        name={"Steve Jobs"}
        message={"Buy this over-expensive iphone and regret later"}
        profilePic={steve}
        postPic={steve1}
        timestamp={"20"}
      />
      <Post
        name={"Linus Torvalds"}
        message={"I was prodigy or something"}
        profilePic={linus}
        postPic={linus1}
        timestamp={"30"}
      />
      <Post
        name={"The Weeknd"}
        message={"I'm always getting high cuz my confidence low"}
        profilePic={weekend}
        postPic={week1}
        timestamp={"40"}
      />
      <Post
        name={"Jermain Cole"}
        message={
          "I'm bleedin from fightin my demons head up/ When I get defeated, believe I get up."
        }
        profilePic={cole}
        postPic={cole1}
        timestamp={"50"}
      />
    </div>
  );
}

export default Posts;
