function preload()
{

}

function setup()
{
    canvas=createCanvas(300, 260);
    canvas.center()
}

function take_snapshot()
{
    save('myfilterimage.png');
}