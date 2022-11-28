import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin, GSDevTools, MotionPathHelper, MotionPathPlugin);





function topanimation() {
    var tl = gsap.timeline({});
    tl.from("#line1", { duration: .5, y: -700, transformOrigin: "center" })
        .from("#line2", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line3", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line4", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line5", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line6", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line7", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line8", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line9", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line10", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line11", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line12", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line13", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line14", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line15", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line16", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line17", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line18", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line19", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line20", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line21", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line22", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line23", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line24", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line25", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line26", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line27", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line28", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line29", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line30", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line31", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line32", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line33", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line34", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line35", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line36", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line37", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line38", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line39", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line40", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line41", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 })
        .from("#line42", { duration: .2, y: -700, transformOrigin: "center", delay: -.1 });

    return tl;
}
function rightanimation() {
    var tl = gsap.timeline({});
    tl.from("#right1", { duration: .5, x: 600, transformOrigin: "center" })
        .from("#right2", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right3", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right4", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right5", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right6", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right6", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right7", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right8", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right9", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right10", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right11", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right12", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right13", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right14", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right15", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right16", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right17", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right18", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right19", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right20", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right21", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right22", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right23", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right24", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right25", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right26", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right27", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right28", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right29", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right30", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right31", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right32", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right33", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right34", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right35", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right36", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right37", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right38", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right39", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right40", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right41", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 })
        .from("#right42", { duration: .2, x: 600, transformOrigin: "center", delay: -.1 });

    return tl;
}
function leftanimation() {
    var tl = gsap.timeline({});
    tl.from("#left1", { duration: .5, x: -700, transformOrigin: "center" })
        .from("#left2", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left3", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left4", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left5", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left6", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left6", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left7", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left8", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left9", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left10", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left11", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left12", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left13", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left14", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left15", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left16", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left17", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left18", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left19", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left20", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left21", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left22", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left23", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left24", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left25", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left26", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left27", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left28", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left29", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left30", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left31", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left32", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left33", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left34", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left35", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left36", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left37", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left38", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left39", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left40", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left41", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 })
        .from("#left42", { duration: .2, x: -700, transformOrigin: "center", delay: -.1 });


    return tl;
}

function bottomanimation() {
    var tl = gsap.timeline({});
    tl.from("#bottom1", { duration: .5, y: 700, transformOrigin: "center" })
        .from("#bottom2", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom3", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom4", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom5", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom6", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom6", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom7", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom8", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom9", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom10", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom11", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom12", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom13", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom14", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom15", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom16", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom17", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom18", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom19", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom20", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom21", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom22", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom23", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom24", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom25", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom26", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom27", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom28", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom29", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom30", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom31", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom32", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom33", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom34", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom35", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom36", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom37", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom38", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom39", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom40", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom41", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 })
        .from("#bottom42", { duration: .2, y: 700, transformOrigin: "center", delay: -.1 });


    return tl;
}

function scaleanimation() {
    var tl = gsap.timeline({});
    tl.to("#topset", { duration: .5, scale: 2, transformOrigin: "center" })
        .to("#bottomset", { duration: .5, scale: 2, transformOrigin: "center" })
        .to("#rightset", { duration: .5, scale: 2, transformOrigin: "center" })
        .to("#leftset", { duration: .5, scale: 2, transformOrigin: "center" });


    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(topanimation())
    .add(rightanimation())
    .add(leftanimation())
    .add(bottomanimation())
    .add(scaleanimation());


GSDevTools.create();

// { duration: 2, drawSVG: "0%" })
// { duration: 1, rotate: -45, transformOrigin: "bottom right" });