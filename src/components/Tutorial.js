import Accordion from "components/Accordion";
import { Link } from "react-router-dom";
import { generateFilenameMap } from "components/utils/fileUtils";

import styles from "components/Tutorial.module.scss";

const imageFilenameMap = generateFilenameMap(
   require.context("images/art-tutorial/", false, /\.(png|jpe?g|svg|gif)$/)
);

export default function Tutorial(props) {
   return (
      <div>
         <h1>Art Tutorial</h1>
         <img
            src={imageFilenameMap["pikachuartprogress.gif"]}
            alt="Pikachu art tutorial step by step"
            className={styles.IntroImg}
         />

         <Accordion>
            <div title="1. Intro">
               <Intro />
            </div>
            <div title="2. Sketch">
               <Sketch />
            </div>
            <div title="3. Outline">
               <Outline />
            </div>
            <div title="4. Coloring">
               <Coloring />
            </div>
            <div title="5. Extra Touch Ups">
               <ExtraTouchUps />
            </div>
         </Accordion>
      </div>
   );
}

function Intro() {
   return (
      <div>
         <p>
            This tutorial will describe the step by step process I go through to
            make my{" "}
            <Link to={`${process.env.PUBLIC_URL}/`}>original Pokemon art</Link>.
            The tutorial is made for <strong>Paint Tool SAI</strong> (you can
            get it{" "}
            <a
               href="http://www.systemax.jp/en/sai/"
               target="_blank"
               rel="noopener noreferrer"
            >
               here
            </a>
            ), which is a lightweight Japanese art software that, in my opinion,
            kicks Photoshop's ass in terms of digital painting. Not that
            Photoshop is limiting in any sort of way, but the easy blending and
            greater pressure sensitivity of SAI makes painting so much more
            efficient.
         </p>

         <p>Some notes before I begin:</p>

         <ul>
            <li>
               There are two sides to creating every drawing: the technical
               process itself (such as the specific brush settings, layers,
               etc.) and the artistic application (such as deciding where to
               shade and how dark to make the shadows). This tutorial will focus
               mostly on the technical process because the application of
               artistic concepts is either mostly intuitive or must be picked up
               from studying objects in real life, not from a tutorial.
            </li>
            <li>
               The way I draw changes all the time, and if you feel like this
               tutorial is not for you, just pass it by. This may be helpful for
               beginners just starting out in digital painting because I try to
               be very specific and clear.
            </li>
            <li>
               This tutorial assumes that you have a{" "}
               <a
                  href="http://en.wikipedia.org/wiki/Graphics_tablet"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  tablet
               </a>
               . If you're remotely interested in reaching your artistic
               potential, a tablet is pretty much required. For 99.9% of the
               population, a mouse just doesn't offer the stability that you
               need when drawing on the computer, although maybe with undying
               patience and/or extreme skill you could get similar results
               between a mouse and a tablet. For me specifically, I use a
               crappy, ancient 4x5 Wacom Graphire tablet. They've been taken off
               the market (a testament to how old it is) but so far it has
               served me well and, as a hobbyist, I see no need for anything
               more elaborate.
            </li>
         </ul>

         <p>And with that said, let's begin!</p>
      </div>
   );
}

function Sketch() {
   return (
      <div>
         <p>
            This is by far the most important part of the drawing, and perhaps
            the one that's most heavily reliant on that intuitive, artistic
            application I referred to earlier. While almost every other step in
            this tutorial can be skipped depending on your style of drawing, no
            drawing should be skipping the sketch. If your sketch sucks, then
            your final drawing won't be that great either, so make sure to take
            the time and make everything right before moving on. It may be
            tempting, say, when you're trying to draw a specific hand position
            but it's not coming out quite right, to be lazy and blow it off,
            convincing yourself that as you progress, it'll just fix itself own,
            but in the end you're going to be forced to go back and make it
            right.
         </p>

         <p>
            Other than that, feel free to be as messy and use as many layers as
            necessary when making The Sketch. A lot of people just put the
            sketch on one layer, but if you draw a really nice head but find
            yourself constantly having to readjust the body and the background,
            it wouldn't be a bad idea to just stick the head on another layer on
            top so you can work more freely.
         </p>

         <p>
            Also, sometimes my first sketch is too confusing to make anything
            out of it. Don't hesitate to make another, cleaner sketch on top of
            your preliminary one if you feel that'll make things easier to see.
            In this case, since the drawing I'm doing is pretty simple, it
            wasn't necessary.
         </p>

         <p>
            Making the sketch is more or less drawing what you want. There's not
            really any specific hints or tips I can give, except that using
            guidelines is really helpful, especially for placing facial features
            in the correct place. Anyway, here's a sketch of Pikachu that I will
            be using for this tutorial:
         </p>

         <p>
            <img src={imageFilenameMap["1sketch.jpg"]} alt="Pikachu Sketch" />
         </p>

         <p>
            When you're done, merge all the sketch layers (if you have more than
            one) and lower the opacity to around 30-50% so you can use it as a
            reference for your outline.
         </p>
      </div>
   );
}

function Outline() {
   return (
      <div>
         <p>
            Well.. prepare yourself... this is hands down (at least to me) the
            most tedious and boring part of the process. I've struggled with
            making nice, crisp freehand outlines for years, before eventually
            ditching them for a more painty, messy style without clearly defined
            outlines. However, the need arises for a really nice outline a lot,
            such as making these Pokemon art stock images. Luckily, SAI has a
            great tool for making lineart. On the left hand side where all your
            layers art, click on the paper button with a pen on top next to the
            New Layour button, like so:
         </p>

         <p>
            <img
               src={imageFilenameMap["2lineartlayer.jpg"]}
               alt="Paint Tool SAI lineart button"
            />
         </p>

         <p>
            This will create a Linework layer, a special layer with unique tools
            made specifically for creating outlines. Basically, every stroke
            that you make on this layer will turn the line into an object that
            you can manipulate. For example, you can drag the line around, make
            it thinner or fatter, change the shape of the curve, etc. There are
            a few pros and cons to using the Lineart layer:
         </p>

         <blockquote>
            <strong>Pros:</strong>
            <ul>
               <li>
                  <strong>Less stress when making the outline.</strong> For me
                  personally, there's a lot of pressure to keep my hand steady
                  and make my lines perfect. However, because you can adjust the
                  lines after you draw them, you can simply drag it around until
                  it's exactly as you want it.
               </li>
               <li>
                  <strong>Automatic smoothing.</strong> Often when you make a
                  stroke freehand, it turns out shaky and imperfect. The program
                  will automatically fix the bumps for you though, which is a
                  huge relief when making large arcs and stuff.
               </li>
               <li>
                  <strong>Ability to adjust the pressure.</strong> You can
                  adjustments to the pressure of the lines, making them thicker
                  or thinner regardless of how much pressure you put on your pen
                  when initially drawing them, which can help make your outline
                  look more varied and polished.
               </li>
            </ul>

            <strong>Cons:</strong>
            <ul>
               <li>
                  <strong>Flexibility.</strong> This tool is not good for really
                  detailed outlines, mostly due to the automatic smoothing that
                  I mentioned above. Just as that feature can be a blessing, it
                  can also be really annoying as it transforms your lines into
                  something that you might not have wanted, especially when it
                  comes to making really tiny details.
               </li>
               <li>
                  <strong>
                     You can't select and move a large portion of the outline.
                  </strong>{" "}
                  This has the potential to get really annoying, because I often
                  find myself in a position where I like the outline I made in a
                  specific part (let's say the fingers on a hand), but it's just
                  a bit out of place and I want to move all the fingers up a
                  bit. If you were working with just a regular layer, you can
                  simply select the fingers and drag them up. However, on the
                  outline layer, you can't, so you can either redraw everything
                  or wait until you're done with the outline, rasterize the
                  layer, and then move it up.
               </li>
               <li>
                  <strong>Crappy eraser.</strong> You'll notice that due to the
                  vector nature of the lines, when you try to erase only a bit
                  of the line to thin it or whatever, it erases in ugly chunks,
                  which contributes to the small detail problem. This is because
                  the eraser doesn't really erase the pixels itself, but rather
                  the strokes you made. So if you want to thin out a line you
                  have to adjust the pressure, which can get a bit annoying.
               </li>
            </ul>
         </blockquote>

         <p>
            Basically, I would say that the Linework layer is good for simple
            images but for anything complicated with a lot of small details,
            you're better off freehanding everything. Of course, you can also do
            a combination of the two and use the lineart layer to get all the
            large shapes out of the way and then freehand the details.
         </p>

         <p>
            Anyway, whatever you choose, make a layer just for the outline and
            make sure it's above your sketch layer. I don't have a specific
            brush width that I use, since it depends on how large my image is to
            begin with and what sort of look I'm aiming for. I normally work
            between 3px to 5px though.
         </p>

         <h3>Quick tip on freehanding the outline</h3>

         <p>
            If you do decide to freehand everything, a good way to allow
            yourself more room for mistakes and keep the crispness is to enlarge
            your sketch. Go to <strong>Canvas &gt; Change Resolution</strong>{" "}
            and enter in new, larger dimensions for your image (make sure
            Constrain Proportions is checked). I recommend making the image two
            times or three times larger than the original. Don't be alarmed by
            the nasty, pixelly look that your sketch has after, which is
            inevitable when you make the image larger than the original. Make
            your outline on top of enlarged sketch, and when you're finished, go
            back to the Change Resolution option and enter in the original
            dimensions of your image. The image will shrink and you'll notice
            that a LOT of imperfections that you made on your outline are less
            noticable or maybe even completely eliminated, depending on how
            large you stretched the image in the first place.
         </p>

         <h3>Using the Edit tool of the Linework layout</h3>

         <p>
            But anyway, if you decide to use SAI's special Linework layer, which
            I will do in this tutorial, if you mess up on one of your line, you
            no longer need to erase it and start over! So long as the curve of
            your stroke is line or less what you want, you can drag the line to
            the place that you want it to be. For example, let's say I have
            this: I'm making the outline of Pikachu's ear and I want that line
            moved more to the right.
         </p>

         <p>
            <img
               src={imageFilenameMap["3outlinemessup.jpg"]}
               alt="Messed up outline"
            />
         </p>

         <p>
            Instead of erasing it and starting over, I can drag it to where I
            want it to be. Click on the <strong>Edit</strong> button to the left
            of the screen where all the brushes and tools are or, as a hotkey,
            just hold <strong>Shift</strong>. Hover over the defective line. The
            line should become highlighted with blue.
         </p>

         <p>
            <img
               src={imageFilenameMap["4outlinemessuphover.jpg"]}
               alt="Hovering over the messed up line"
            />
         </p>

         <p>
            Now, hover your mouse over the endpoint of the line. The point
            should turn pink. Then, while still holding down Shift if you're
            using the hotkey, click, hold, and drag the endpoint to the place
            where you want to line to be. In this case, I moved the line more to
            the right, like so:
         </p>

         <p>
            <img
               src={imageFilenameMap["5outlinehover.jpg"]}
               alt="Dragging the line"
            />
         </p>

         <p>
            You can manipulate the outline a lot more using the Edit tool. Feel
            free to play with it and just drag around the line to see how much
            you can distort it!
         </p>

         <h3>Rotating the canvas</h3>

         <p>
            When making outlines, it's a lot more natural for your wrist to make
            swift vertical strokes. However, when you have to make a long
            horizontal line, it's harder to get it right since your wrist just
            doesn't bend that way very well. When you're actually drawing on a
            physical piece of paper, you turn the paper at different angles when
            making lines to accomodate your wrist because your wrist only
            naturally goes in a few different directions while the lines are
            going everywhere. In our example, Pikachu's bottom chin looks like
            just the type of long, horizontal line that can give us a bit of
            grief, as highlighted below.
         </p>

         <p>
            <img
               src={imageFilenameMap["6annoyingoutline.jpg"]}
               alt="Pikachu&#39;s bottom chin"
            />
         </p>

         <p>
            Thankfully, SAI has a really nice tilting feature that allows you to
            rotate the image to change the angle that you're working at for the
            image. The toolbar for it can be found directly above your canavas:
         </p>

         <p>
            <img
               src={imageFilenameMap["7rotation.jpg"]}
               alt="Rotation options in SAI"
            />
         </p>

         <p>
            The default setting for the rotation should be at 0 degrees. Click
            on the arrows to rotate the image. I changed the angle to 90 degrees
            so the horizontal line will now be vertical. It should now be pretty
            easy doing that horizontal line. And just to show how useful the
            dragging outline thing is, I messed up anyway but no worries,
            because I was able to drag the outline to the right place.
         </p>

         <p>
            <img
               src={imageFilenameMap["8rotationoutline.jpg"]}
               alt="Completing the chin"
            />
         </p>

         <p>
            I'm out of tips, so I'll just jump right to the finished outline.
            Here's what it looks like once everything's all said and done (you
            can also turn off the sketch layer at this point because there's no
            need for it):
         </p>

         <p>
            <img src={imageFilenameMap["9outline.jpg"]} alt="Pikachu outline" />
         </p>

         <h3>Refining the Outline</h3>

         <p>
            You can just stop there if you like the look, but if you want a more
            polished look, you can adjust the pressure of the lines, which is
            another selling point for using the Lineart layer. In order to
            adjust the pressure, click on the Pressure button next to all the
            other tools for the layer on the left side of the screen:
         </p>

         <img
            src={imageFilenameMap["10pressure.jpg"]}
            alt="Where to find the Pressure tool"
         />
         <p></p>

         <p>
            This tool is great if you want to <em>taper</em> your lines. Tapered
            lines get thinner at the edges and are thicker in the middle. Here's
            a visual example:
         </p>

         <p>
            <img
               src={imageFilenameMap["11taperedline.jpg"]}
               alt="Tapered and untapered line"
            />
         </p>

         <p>
            Both of the lines are made using a 5px large brush. The top line is
            tapered while the bottom line isn't. You can see how much better
            looking the tapered line is, and while Paint Tool SAI already does
            an excellent job of sensing the pressure being applied to the pen
            and tapers the lines for you (since you naturally apply less and
            less pressure as you finish up your lines), but you can accentuate
            this effect with the Pressure tool.
         </p>

         <p>
            Using the pressure tool is pretty similar to just editing the lines
            itself. Once you'd selected Pressure in the toolbox, hover over the
            line you want to change and it should turn blue and indicate
            specific points on the curve where your line curves. Click and hold
            on one of these points, and drag it to the left or the right. This
            will thicken or thin the line surrounding that specific point. I
            chose a specific line on Pikachu's leg that I really didn't like:
         </p>

         <p>
            <img
               src={imageFilenameMap["12pressurepoints.jpg"]}
               alt="Pressure points outline"
            />
         </p>

         <p>And here's how it looks after I tapered it:</p>

         <p>
            <img
               src={imageFilenameMap["13pressuredone.jpg"]}
               alt="Tapered line using the pressure tool"
            />
         </p>

         <p>
            The line looks a lot better now. Basically, just go through the rest
            of the outline and change the pressure wherever you feel it
            necessary. And just to illustrate how big of a difference this
            process makes on your outline, here's an animation that shows the
            outline before the tapering and after:
         </p>

         <p>
            <img
               src={imageFilenameMap["14outlinepressureani.gif"]}
               alt="Tapered and untapered outline animation"
            />
         </p>

         <p>
            Quite a difference, isn't it? In fact, you probably can't see the
            entirety of the difference because the animation above is shrunken
            to less than half of the original size of the actual drawing, so if
            you view it in real size you'll definitely a lot better how it
            improves the lineart. It may feel like a waste of time going through
            each line and thinning out the edges, but it really helps make the
            outline look a lot less clunky and a lot smoother and refined, which
            is what we're going for.
         </p>

         <h3>Finishing it Off</h3>

         <p>
            Alright, so now you're basically finished with the outline. It's
            still in that "special" Linework type layer instead of just a
            regular layer, and if you have no new adjustments to make concerning
            the tools that the Lineart layers provide, it's time to rasterize
            the layer. Rasterizing the layer basically changes the layer from a
            special layer (such as a Shape layer, Adjustment layer, etc.) back
            to just a regular one. Why rasterize? Well, perhaps the most
            compelling reason is that you cannot make any adjustments to the
            layer outside of the adjustments that the specific layer type allows
            you to. So basically, if you're working on a Linework layer, you
            can't use just a regular Brush and color over it. The only changes
            you can make are with the Pressure, Edit, Curve, etc. tools that the
            layer gives you, which obviously limits your ability to adjust your
            outline however you want. Also, if you cannot save your file as a
            PSD file if you want to do further adjustments in Photoshop (which I
            will do later in this tutorial).
         </p>

         <p>
            Anyway, in order to rasterize your lineart layer, make sure it's
            selected on your list of layers and go to{" "}
            <strong>Layer &gt; Rasterize Linework Layer</strong>.
         </p>

         <p>
            <img
               src={imageFilenameMap["15rasterize.jpg"]}
               alt="Rasterize the linework layer"
            />
         </p>

         <p>
            Now that you've rasterized the layer, you can go in and use all the
            other tools of Paint Tool SAI to adjust the outline that you've been
            missing out on. For example, I decided to really thin out the
            outline around Pikachu's cheeks and back stripes (because they're
            "soft" color boundaries) and adjust his foot. Here's the *finally
            finished* product!
         </p>

         <p>
            <img
               src={imageFilenameMap["16outlinefinished.jpg"]}
               alt="Finished outline"
            />
         </p>

         <p>
            And so ends the most annoying part of the drawing. Everything from
            here on out is fun and a lot less meticulous. :)
         </p>
      </div>
   );
}

function Coloring() {
   return (
      <div>
         {" "}
         <p>
            Woohoo, now that you're over the "outline hump" as I like to call
            it, it's now time to color everything in! First you've got to make
            sure you're able to color within the lines. The easiest way to do
            this is to create a base color layer underneath the outline that
            basically provides the boundaries between where you should and
            shouldn't color. To put it in simpler terms, it prevents any color
            from going outside the lines.
         </p>
         <p>
            In order to go about this, select the Magic Wand tool located above
            the toolbox on the left:
         </p>
         <p>
            <img
               src={imageFilenameMap["17magicwand.jpg"]}
               alt="Magic Wand tool"
            />
         </p>
         <p>
            This is basically the Bucket Fill version of Select. Now you want to
            Magic Wand everything inside the outline. If there are little gaps
            in corners and stuff that the Magic Wand can't reach, go back and
            use the regular Select tool and fill them in. Anything covered in
            blue means that it's selected. Here's what your image should look
            like at this point:
         </p>
         <p>
            <img
               src={imageFilenameMap["18magicwand-outline.jpg"]}
               alt="Selected outline using magic wand"
            />
         </p>
         <p>
            Now, make a new layer for your base color and move it underneath the
            outline (from here on out make extra sure that you're not
            accidentally working <em>on</em> the outline layer sure it's
            happened to me once or twice and it really messes things up). Then,
            fill it in with the main color of your image. Just to check in,
            here's how your layers should look up to now:
         </p>
         <p>
            <img
               src={imageFilenameMap["19basecolor.jpg"]}
               alt="Layer menu with the base color"
            />
         </p>
         <p>
            Okay, now that you've gotten the base down, make a new layer on top
            of that layer, which will be used for the secondary colors (such as
            Pikachu's cheeks, eyes, and back stripes). Basically anything that's
            not yellow and does not touch each other should be in this layer. Or
            you can make them all on different layers instead of just all on one
            secondary color layer. It doesn't really matter, so long as it's not
            on the base color layer. I chose to use only one extra layer since
            it's more convient.
         </p>
         <p>
            Now, making sure that the secondary color layer is directly above
            the base color layer, turn the secondary color layer into a{" "}
            <strong>Clipping Mask</strong>. To do this, just check the checkbox
            that says Clipping Mask where all the other layer options are.
         </p>
         <p>
            <img
               src={imageFilenameMap["20clipping.jpg"]}
               alt="Turn layer into a clipping mask"
            />
         </p>
         <p>
            A "mask" basically provides boundaries as to where a layer will
            show. By making the secondary color layer a clipping mask of the
            base color layer, anything that you put on the secondary color layer
            will be restricted to the boundaries of the base color layer. So
            because the base color layer is all the space within the outline,
            anything that you put in the secondary color layer will also be
            within the outline. If you try to color outside of the outline, it
            won't show up. Here's a visual example:
         </p>
         <p>
            <img
               src={imageFilenameMap["21clippingani.gif"]}
               alt="Example of the clipping mask"
            />
         </p>
         <p>
            So basically any extra details and colors that you want to make
            should go in layers on top of the base layer with the clipping mask
            turned on.
         </p>
         <p>
            Okay, so now that you've made the secondary layer a clipping mask,
            it's time to select all the secondary elements of Pikachu. Just use
            the Magic Wand tool. This is what your screen should look like when
            it's done:
         </p>
         <p>
            <img
               src={imageFilenameMap["22secondaryselect.jpg"]}
               alt="Secondary colors all selected"
            />
         </p>
         <p>Color each thing in whatever color's needed.</p>
         <p>
            <img
               src={imageFilenameMap["23secondary.jpg"]}
               alt="Blocked in colors for the secondary elements"
            />
         </p>
         <p>
            You've gotten everything set up for the shading and highlighting.
            Now it's time to actually do it! Turn on the Preserve Opacity option
            for both the base layer and the secondary color layer to lock the
            boundaries and prevent any leakage outside of your outline.
         </p>
         <p>
            <img
               src={imageFilenameMap["24preserveopacity.jpg"]}
               alt="Preserve opacity option"
            />
         </p>
         <h3>Marker Settings</h3>
         <p>
            Now change your drawing tool to the <strong>Marker</strong>. This is
            the tool that I use for basically all the coloring. Here are the
            settings that I have mine set to do most of the coloring work:
         </p>
         <p>
            <img
               src={imageFilenameMap["25markersetting.jpg"]}
               alt="Marker settings"
            />
         </p>
         <p>
            The only two things I noramlly ever adjust are the Blending and the
            Shape of the brush.
         </p>
         <p>
            One of SAI's strongest aspects is its amazing blending capabilities:
            it can literally create a huge spectrum of shades from just two
            different colors. It saves so much time since you don't have to make
            like 5 different degrees of dark colors just to create the shading;
            just 2 or 3 (if that) will suffice. If you're making soft shadows
            and are aiming for subtle transitions, turn the Blending up closer
            to 60-70. If you're looking for a hard, distinct difference, lower
            the Blending to around 10 or 20.
         </p>
         <p>
            The next setting that I change is the shape of the brush, which can
            be changed from the dropdown list highlighted above. For this
            tutorial, I'm just going to use a simple circle since there's not
            really a specific texture that I'm going for. If you're looking to
            create a painty feel, or a furry texture, you should definitely
            change the brush shape. Here's a summary of all the different shapes
            and the strokes they produce in this handy dandy chart:
         </p>
         <p>
            <img
               src={imageFilenameMap["26brushsamples.png"]}
               alt="Sample strokes of Paint Tool SAI&#39;s different marker shapes"
            />
         </p>
         <h3>The actual shading and highlighting process</h3>
         <p>
            This is another step that falls mostly in the realm of "artistic
            application" that I can't really explain. Basically, just make sure
            when you're shading that you're mindful of wherever the light source
            is that you decide to choose and be consistent once you've decided
            on that. Other than that, shade away based on your intution or based
            off the reference image if you're using one.
         </p>
         <p>
            <img
               src={imageFilenameMap["27shading1.jpg"]}
               alt="First layer of shading"
            />
         </p>
         <p>
            There's my first layer of shading. Everything seems kind of flat and
            bland, so I decided to add on another, darker and more pronounced
            layer.
         </p>
         <p>
            <img
               src={imageFilenameMap["28shading2.jpg"]}
               alt="Second layer of shading"
            />
         </p>
         <p>
            I'm going to stop there with the shading. Shading and highlighting
            are just way too damn fun, so you have to make sure not to get
            carried away and make overexaggerated shadows and highlights unless
            it helps to emphasize the material of the thing your drawing. In
            Pikachu's case, I'm shading in fur so there shouldn't be huge
            variations in shadows and highlights. If you're shading in a smooth,
            shiny object like metal or anything under harsh, strong light,{" "}
            <em>then</em> you can pile on the darker shadows and super light
            highlights.
         </p>
         <p>
            With the shading done, it's time to move onto the highlights. Since
            it's fur that I'm coloring, there shouldn't be super bright
            highlights. I just used a light yellow and made very subtle light
            spots on Pikachu's forhead and back. Not much else to say here.
         </p>
         <p>
            Another thing that you can add that adds depth and makes the drawing
            more interesting are <em>backlights</em>. If there are two different
            light sources placed at specific locations, there can be a backlight
            effect in which there is a distinct, bright highlight on the edge of
            the object, even if there's a shadow. Normally this doesn't happen
            for everything but I like adding backlights anyway because it makes
            the image more interesting and the already existing shadows "pop" a
            bit more. Here's Pikachu with the backlights, with arrows pointing
            to them:
         </p>
         <p>
            <img src={imageFilenameMap["29backlights.jpg"]} alt="Backlights" />
         </p>
         <p>
            Again, be careful not to go too overboard with this because it is
            really fun to do. Since you're going for a sharp, distinct line,
            make sure your blending is turned down to 20 or so. As you can see,
            this spices the image up a lot more, although it probably won't
            necessarily happen in real life (similar to the white eye shines
            that are omnipresent in every single cartoon image although if you
            look at actual photos of eyes they're rarely ever there... it just
            adds a spark that can't be achieved with anything else though).
         </p>
         <h3>Smoothing out the colors</h3>
         <p>
            You can skip this step if you like, depending on what kind of feel
            you're aiming for. If you look at the Pikachu drawing so far, you
            can see that the colors rather "painty" and the transitions aren't
            really smooth. I normally like this look, but because I want to make
            stock images that people can use for graphics and stuff, this isn't
            really the "typical," flexible for any purpose coloring that I want.
            I basically just want to smooth out the colors.
         </p>
         <p>
            To do this, select the <strong>Water</strong> tool:
         </p>
         <p>
            <img
               src={imageFilenameMap["30watersettings.jpg"]}
               alt="Water tool settings"
            />
         </p>
         <p>
            The SAI water tool is the ultimate blending tool. These are the
            settings I use and I pretty much never change them besides the size.
            Now, <em>lightly</em> go over the areas that you want to smooth out.
            Make sure not to press too hard because otherwise you'll end up
            blending too much and getting and overly-smooth feel (unless of
            course that's what you're going for). You just want to get rid of
            the harsher color transitions. Here's what Pikachu looks like before
            and after the smoothing:
         </p>
         <p>
            <img
               src={imageFilenameMap["31smoothingani.gif"]}
               alt="Smoothing before and after"
            />
         </p>
         <h3>Secondary Elements</h3>
         <p>
            Now that I'm finished with the main yellow body, it's time to move
            onto Pikachu's secondary elements, such as his red cheeks, brown
            back stripes, and black ears. Go to your secondary color layer(s)
            and follow more or less the same process as the body.
         </p>
         <p>
            <img
               src={imageFilenameMap["32secondarycolors.jpg"]}
               alt="Secondary colors finished"
            />
         </p>
         <p>
            I didn't do the eyes because they require more attention to detail
            than the rest. Of course, Pikachu's eyes are different than a
            human's in that he doesn't really have eye whites, and conventional
            images of Pikachu have relegated his eyes to nothing more than two
            black circles with a white eye shine. However, I'm going to go for a
            more sophisticated method and add more detail. There are many, many
            different ways to make eyes, but here's an upclose, step by step
            process that I took to create the eyes:
         </p>
         <p>
            <img
               src={imageFilenameMap["33eyeprocess.jpg"]}
               alt="Step by step coloring in eyes"
            />
         </p>
         <ol>
            <li>
               I basically just colored in the outer edges a darker color that's
               lighter in the middle. I'm choosing at this point to make
               Pikachu's eyes a brown-red color.
            </li>
            <li>
               I made <em>clearly defined</em> black pupils in the middle of his
               eyes. For this I set the blending to close to 0, since the pupils
               need to be dark and distinct from the rest of the eye.
            </li>
            <li>
               To highlight the difference between the pupil and the rest of his
               eye and to make the eye more interesting, I added a brighter red
               around his pupil. This gives the eyes more depth.
            </li>
            <li>
               I used a 1-2px large brush (you can even use the Pen tool) with
               close to 0 blending and made small, verticle (relative to the
               pupil) lines to make the eye look more realistic.
            </li>
            <li>
               I added the omnipresent white eye shines that give the eyes life.
               Make sure not to go too overboard with these eye shines. Do these
               on another layer if needed because you don't want the shine to
               blend in with the rest of the eye.. they should be completely
               separate.
            </li>
            <li>
               I could have finished there, but because it was weird seeing
               Pikachu with super detailed eyes (since most of the time we just
               get those black pools that Nintendo calls eyes), I decided to
               tone it down a bit and just made the whole thing less bright and
               flashy.
            </li>
         </ol>
         <h3>Putting it all Together</h3>
         <p>
            Now, you can just stop here if you're happy with what you have.
            However, I always like to tidy up the entire image and "unify"
            everything by making a "blanket" color layer. Although it's not
            really that important because Pikachu is just more or less all
            yellow, if you have a character with a lot of different colors and
            each color seems as if it's acting independently and isn't really
            meshing in with the larger picture overall, doing this would be a
            good idea.
         </p>
         <p>
            To make this blanket color layer, make a layer on top of ALL the
            other layers you have so far (in my case, the blanket color layer is
            above the secondary colors layer and the eye layer), just under the
            outline, and make sure the clipping mask is turned on.
         </p>
         <p>
            <img
               src={imageFilenameMap["34blanketlayers.jpg"]}
               alt="Where the blanket color layer should be"
            />
         </p>
         <p>
            Now just go over your shading in one color. I chose blue because
            it's directly opposite to orange and I thought it'd compliment
            Pikachu's yellow-orangeness quite well. Don't be afraid to use a
            bright color because the idea of this is to introduce another tint
            to the image that makes it more interesting and just pulls
            everything together. However, you don't want to make your blanket
            shading too noticeable or else your drawing will just look like a
            bright, blue (if that's the color you chose) mess. The point of this
            is to be subtle. Smooth out the transitions with the Water tool
            after you're done.
         </p>
         <p>
            <img
               src={imageFilenameMap["35blanket.jpg"]}
               alt="Pikachu with a blanket blue shade"
            />
         </p>
         <p>
            There's a definite, but at the same time, subtle difference, isn't
            there? If you don't like the look just skip this step but I think as
            long as you don't overdo it, a bit of blanket shading never hurts.
         </p>
         <p>
            If you decide to finish here, it's time to Export your picture and
            share it to the web if you're into that. Or, if not, it's still good
            to change your .sai or .psd file into a universal format. Go to{" "}
            <strong>File &gt; Export As &gt; .png (PNG)</strong>. I recommend
            always exporting as a PNG format because, although they take up the
            most space, it will give you the highest quality and leave all the
            pixels virtually untouched. Handling your drawings definitely isn't
            the time to be stingy with disk space.
         </p>
         <p>Feel free to read on anyway if you're not finished!</p>
      </div>
   );
}

function ExtraTouchUps() {
   return (
      <div>
         <p>
            You're basically done with the "artistic application" at this point.
            I like to do a few extra adjustments in Photoshop.
         </p>

         <h3>Coloring the Outline</h3>

         <p>
            Right now we just have a solid black outline, which is okay but
            sometimes you want it to be more subtle and not so obvious. The
            solution is to color the outline a different color. Turn on the
            Preserve Opacity option for the outline layer and change the color
            of the outline to something less harsh, like a dark brown color if
            you have something that's mostly yellow (which is exactly what I
            have).
         </p>

         <p>
            <img
               src={imageFilenameMap["36outlinecolor.jpg"]}
               alt="Pikachu with the outline colored in"
            />
         </p>

         <h3>Extra Accessories and Effects</h3>

         <p>
            Well I thought it was time to hang up my tablet and call it a day
            but I decided on a whim to add some electricty coming out of
            Pikachu's cheeks, because, well, why not?
         </p>

         <p>
            <img
               src={imageFilenameMap["37electricity.jpg"]}
               alt="Pikachu with electricity coming out of his cheeks"
            />
         </p>

         <p>
            If you want to know how I made it, well I pretty much just
            improvised the whole way. I started out with random branches (like
            tree branches) coming out of cheeks, used the water tool on the
            edges to make it look more realistic and give it a glow effect, made
            more squiggly, random lines on top, and added white glow on a layer
            at the bottom. (I do realize how unhelpful that description was but
            sometimes there's not really a way to explain it besides to just
            look at an actual photograph and try to replicate its effects as
            best you can,)
         </p>

         <h3>Adjustments in Photoshop</h3>

         <p>
            Obviously, completely disregard this section if you don't have
            Photoshop.
         </p>

         <p>
            At this point, if you didn't just initially save your file as a PSD,
            it's time to export your .sai file into a .psd! Just go to{" "}
            <strong>File &gt; Save As</strong> and in the file name just add a
            .psd at the end and it'll automatically make your file into a PSD.
            You can also go to{" "}
            <strong>File &gt; Export As &gt; .psd (Photoshop)</strong>, which
            will also get you in the same place. Load Photoshop and open up your
            file there.
         </p>

         <p>
            Paint Tool SAI gets you the best of the digital painting world but
            Photoshop still wins hands down in everything else. A lot of
            different effects can spice up your drawing. For this tutorial, I'll
            scale down the effects and just go with the basics: adding a slight
            blur to the outline and adjusting the lighting.
         </p>

         <p>
            To add a blur to the outline, you need to first duplicate your
            outline layer. Go to <strong>Layer &gt; Duplicate Layout</strong>{" "}
            and press Ok. Turn off the Preserve Opacity option (in Photoshop
            it's the button with the squares next to "Lock"). Then, go to{" "}
            <strong>Filter &gt; Blur &gt; Gaussian Blur</strong> and a box will
            pop up like so:
         </p>

         <p>
            <img
               src={imageFilenameMap["38gaussianblur.jpg"]}
               alt="Blurring the outline with Gaussian blur"
            />
         </p>

         <p>
            Adjust the amount of blur to whatever number you like. For this
            tutorial I used a 4.7 pixel blur. Then, turn down the opacity of the
            blurred outline layer to around 50% or so, because you don't want it
            to be too noticeable (again, subtlety is what you want).
         </p>

         <p>
            <img
               src={imageFilenameMap["39blurred.jpg"]}
               alt="Pikachu with Gaussian Blur"
            />
         </p>

         <p>
            This basically just softens up the whole image and adds a nice
            effect that's pleasing to the eye... not sure how else to describe
            it!
         </p>

         <p>
            Another adjustment that you can make, if necessary is the lighting.
            To do this, go to{" "}
            <strong>Layer &gt; New Adjustment Layer &gt; Levels</strong>. It's
            better to work with adjustment layers than to directly apply the
            adjustments onto the color layers themselves, because adjustment
            layers offer a lot more flexibility in terms of changing them
            whenever you want or turning them off completely if you decide to
            scrap the adjustments.
         </p>

         <p>Anyway, you should get a window like this:</p>

         <p>
            <img
               src={imageFilenameMap["40levels.jpg"]}
               alt="Adjusting the levels"
            />
         </p>

         <p>
            Just use the sliders highlighted to alter the lighting to however
            you like it. For Pikachu, I just upped the brightness and darkened
            the shadows a bit by sliding the sliders on the left (the shadows)
            and the right (the highlights) a bit more to the middle.
         </p>

         <div id="finished"></div>
         <h2>Finished!</h2>

         <p>
            And yep, that's it. You (or should I say <em>I</em>) are finally
            done! Breathe a sigh of relief. If you stuck it out through this
            whole tutorial, props to you for your undying patience!
         </p>

         <p>
            Just to make sure we're all on the same page, here's a last look at
            what the layers look like by the end of this:
         </p>

         <p>
            <img
               src={imageFilenameMap["41layeroverview.jpg"]}
               alt="Overview of all the layers"
            />
         </p>

         <p>And here's what my finished product looks like!</p>

         <p>
            <img
               src={imageFilenameMap["pikachu.png"]}
               className={styles.FinishedImg}
               alt="Finished Pikachu"
            />
         </p>

         <p>
            I overlayed the image on a dark background since it looks way more
            epic, especially with the electricity that you can't really make out
            on a light background.
         </p>

         <p>
            And that concludes this ridiculously long tutorial. I tried to be
            very thorough so I hope if you tried to follow it that you didn't
            get lost anywhere. I hope this was helpful to those who genuinely
            wanted to learn and to those who were just curious as to how I made
            my art. Thanks for reading! :)
         </p>
      </div>
   );
}
