import { Link } from 'react-router-dom'
import { Hero, ImageCards, TextComponent } from '../components'

const Live = () => {
  return (
    <>
      <Hero heading={`What's new in Live 11`} />

      {/* OFFER */}
      <section className="relative ">
        <img
          src="https://ableton-production.imgix.net/live/creation-space-front-10.jpg?auto=compress%2Cformat&w=1600"
          alt="img"
          className=" w-full object-contain"
        />
        <div
          className="off w-full text-center h-9 lg:h-11 absolute top-0 lg:top-10 right-0 lg:w-96"
          style={{ backgroundColor: '#dafd2b' }}
        >
          <Link to="/shop">
            <p className="font-medium my-auto text-sm mt-2 lg:text-lg cursor-pointer ">
              Students and teachers get 50% off Live 11
            </p>
          </Link>
        </div>
      </section>

      {/* FREE TRAIL */}
      <section
        className="h-auto py-12 px-16"
        style={{ backgroundColor: '#dafd2b' }}
      >
        <div className="info mb-10">
          <Link>
            <h1 className="text-xl md:text-3xl lg:text-5xl font-medium text-blue-900 mb-5">
              Try Live 11 free for 30 days
            </h1>
          </Link>
          <p className="leading-tight font-medium ">
            The Live 11 Suite trial includes all the features of the full
            version, including saving and exporting. You can use it alongside
            your current version of Live.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-lg">
            Explore the features in Live 11:
          </h1>
          <div className="img-cards grid grid-cols-2 lg:grid-cols-3 gap-1">
            <ImageCards
              src="https://ableton-production.imgix.net/live/jump-nav-comping.jpg?auto=compress%2Cformat&amp;w=350"
              text="Create your perfect take with comping"
            />
            <ImageCards
              src="https://ableton-production.imgix.net/live/jump-nav-mpe.jpg?auto=compress%2Cformat&amp;w=350"
              text="Add more feeling to your music"
            />
            <ImageCards
              src="https://ableton-production.imgix.net/live/jump-nav-new-devices.jpg?auto=compress%2Cformat&amp;w=350"
              text="Experiment with new devices"
            />
            <ImageCards
              src="https://ableton-production.imgix.net/live/jump-nav-performance-improvements.jpg?auto=compress%2Cformat&amp;w=350"
              text="Do more on stage"
            />
            <ImageCards
              src="https://ableton-production.imgix.net/live/jump-nav-chance-tools.jpg?auto=compress%2Cformat&amp;w=350"
              text="Be unpredictable"
            />
            <ImageCards
              src="https://ableton-production.imgix.net/live/jump-nav-new-sounds.jpg?auto=compress%2Cformat&amp;w=350"
              text="Work with new and updated sounds"
            />
          </div>
        </div>
      </section>

      {/* PERFECT TAKE */}
      <section>
        <h1 className="text-left indent-2 text-3xl md:text-5xl lg:text-6xl font-semibold mt-10">
          Create a perfect take
        </h1>
        <div className="video mt-10">
          <video className="w-full" height="500" controls>
            <source src="https://youtu.be/StDHuDdDANc" type="video/mp4" />
          </video>
          <p className="font-medium indent-2 text-sm">
            Artist records and edits multiple takes of her voice and a MIDI
            keyboard using comping
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <TextComponent
            topText="Take recording and comping"
            belowText="Live organizes multiple passes of an audio or MIDI performance into individual takes. Pick the best moments of each performance and combine them to create your perfect take. Or approach sound design in a new way by splicing together random samples from your library."
          />
          <TextComponent
            topText="Linked-Track Editing"
            belowText="Link two or more tracks to edit their content simultaneously. This makes editing multi-tracked instruments or performances with multiple musicians easy and fast whilst keeping everything in time across tracks. This feature also works for MIDI tracks."
          />
        </div>
      </section>

      {/* FEELING TO MUSIC */}
      <section>
        <h1 className="text-left indent-2 text-3xl md:text-5xl lg:text-6xl font-semibold mt-10">
          Add more feeling to your music
        </h1>
        <div className="video mt-10">
          <video className="w-full" height="500" controls>
            <source src="https://youtu.be/StDHuDdDANc" type="video/mp4" />
          </video>
          <p className="font-medium indent-2 text-sm">
            Artist demonstrates MPE using a Roli Seaboard, Push and Live 11’s
            new Note Expression View
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <TextComponent
            topText="Use your MPE-capable controller"
            belowText="Plug in your MPE-capable controller and immediately add bends, slides and pressure for each individual note in a chord. Add subtle expression variations, morph between chords and create evolving sonic textures."
          />
          <TextComponent
            topText="What is MPE?"
            belowText="MPE stands for MIDI Polyphonic Expression. This way of using MIDI allows MPE-capable devices to control multiple parameters of every note in real time for more expressive instrumental performances."
          />
        </div>
      </section>

      {/* LEARN MORE */}
      <section className="learn-more">
        <button className="text-blue-900 bg-none border-2 border-blue-900 w-11/12 flex justify-center items-center mx-auto py-4 font-bold mb-10">
          + Learn more
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto hidden">
          <div>
            <img
              src="https://ableton-production.imgix.net/live/screenshot-note-expression-view.jpg?auto=compress%2Cformat&w=768"
              alt="Note Expression View"
              className=" px-10 "
            />
            <TextComponent
              topText="Note Expression View"
              belowText="Edit the pitch, slide and pressure envelopes of each note to refine the expression of your takes. Or take your sound design further by sequencing polyphonic sound variations."
            />
          </div>

          <div>
            <img
              src="https://ableton-production.imgix.net/live/screenshot-expressive-sounds.jpg?auto=compress%2Cformat&w=768"
              alt="More expressive sounds included"
              className=" px-10"
            />
            <TextComponent
              topText="More expressive sounds included"
              belowText="Wavetable, Sampler and Arpeggiator are all updated to support MPE. And Live comes with MPE presets for each device that bring new dimensions of interaction and playability to your sound. The new expressive possibilities also enable polyphonic aftertouch on Push."
            />
          </div>
        </div>
      </section>
    </>
  )
}
export default Live
