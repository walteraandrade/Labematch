import React, { useState } from "react";
import "./style.css";
import { useForm } from "../../global/functions/useForm";
import { useHistory } from "react-router-dom";
import { signup } from "../../global/functions/apiHandler";

function SignUp() {
  const history = useHistory();

  const { form, onChange, resetForm } = useForm({
    name: "",
    email: "",
    password: "",
    picture: "",
    genre1: "",
    genre2: "",
    genre3: "",
  });

  const handleInput = (event) => {
    const { value, name } = event.target;
    onChange(name, value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const genre = [`${form.genre1}`, `${form.genre2}`, `${form.genre3}`];
    const body = {
      name: form.name,
      email: form.email,
      password: form.password,
      picture: form.picture,
      favGenres: genre,
    };

    console.log(body);

    await signup(body).catch((e) =>
      window.alert("There is an error with your info, please try again")
    );

    resetForm();
  };

  return (
    <div className="signUpContainer">
      <h1>LABEMATCH - sign up</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={form.name}
          placeholder="name"
          onChange={handleInput}
          pattern={["[A-Za-z ]{3,}"]}
          required
        />
        <input
          name="email"
          type="text"
          value={form.email}
          placeholder="email"
          onChange={handleInput}
          required
        />
        <input
          name="password"
          type="password"
          value={form.password}
          placeholder="password"
          onChange={handleInput}
          required
        />
        <input
          name="picture"
          type="text"
          value={form.picture}
          placeholder="picture link"
          onChange={(event) => handleInput(event)}
          required
        />
        <select onChange={handleInput} name="genre1" required>
          <option value="">Chose one</option>
          <option value="Acid Jazz">Acid Jazz</option>
          <option value="Adult pop">Adult pop</option>
          <option value="African Blues">African Blues</option>
          <option value="Afrobeat">Afrobeat</option>
          <option value="Afro-Cuban Jazz">Afro-Cuban Jazz</option>
          <option value="Axé">Axé</option>
          <option value="Ambient">Ambient</option>
          <option value="Australian Country">Australian Country</option>
          <option value="Bebop">Bebop</option>
          <option value="Black Metal">Black Metal</option>
          <option value="Bluegrass">Bluegrass</option>
          <option value="Blues Rock">Blues Rock</option>
          <option value="Blues">Blues</option>
          <option value="Bossa Nova">Bossa Nova</option>
          <option value="Brega">Brega</option>
          <option value="Calypso">Calypso</option>
          <option value="Celtic">Celtic</option>
          <option value="Cha-cha-chá">Cha-cha-chá</option>
          <option value="Choro">Choro</option>
          <option value="Classic">Choro</option>
          <option value="Cool jazz">Cool jazz</option>
          <option value="Country">Country</option>
          <option value="Disco">Disco</option>
          <option value="Djent">Djent</option>
          <option value="Drum 'n Bass">Drum 'n Bass</option>
          <option value="Dub">Dub</option>
          <option value="Electroacoustic">Electroacoustic</option>
          <option value="Eletronic">Eletronic</option>
          <option value="Emo">Emo</option>
          <option value="Experimental">Experimental</option>
          <option value="Flamenco">Flamenco</option>
          <option value="Folk">Folk</option>
          <option value="Forró">Forró</option>
          <option value="Funk">Funk</option>
          <option value="Funk Rock">Funk Rock</option>
          <option value="Gothic">Gothic</option>
          <option value="Gospel">Gospel</option>
          <option value="Grunge">Grunge</option>
          <option value="Glam Rock">Glam rock</option>
          <option value="Golden Age Rock ">Glam rock</option>
          <option value="Gypsy">Gypsy</option>
          <option value="Hardcore">Hardcore</option>
          <option value="Hard Rock">Hard Rock</option>
          <option value="Hip Hop">Hip Hop</option>
          <option value="House">House</option>
          <option value="Indie">Indie</option>
          <option value="Industrial">Industrial</option>
          <option value="Jazz Fusion">Jazz Fusion</option>
          <option value="Jazz Rock">Jazz Rock</option>
          <option value="J-Pop">J-Pop</option>
          <option value="J-Jazz">J-Jazz</option>
          <option value="J-Rock">J-Rock</option>
          <option value="K-Pop">K-Pop</option>
          <option value="Kuduro">Kuduro</option>
          <option value="Lo-Fi">Lo-Fi</option>
          <option value="Makossa">Makossa</option>
          <option value="Mambo">Mambo</option>
          <option value="Maracatu">Maracatu</option>
          <option value="Mariachi">Mariachi</option>
          <option value="Math Rock">Math Rock</option>
          <option value="Musique Concrète">Musique Concrète</option>
          <option value="New-age">New-age</option>
          <option value="Nu Metal">Nu Metal</option>
          <option value="Post bop">Post bop</option>
          <option value="Power Metal">Power Metal</option>
          <option value="Prog Rock">Prog Rock</option>
          <option value="Prog Metal">Prog Metal</option>
          <option value="Psychodelic Rock">Psychodelic Rock</option>
          <option value="Post-Rock">Post-Rock</option>
          <option value="Punk">Punk</option>
          <option value="Rap">Rap</option>
          <option value="R&B">R&B</option>
          <option value="Reggae">Reggae</option>
          <option value="Reggaeton">Reggaeton</option>
          <option value="Rockabilly">Rockabilly</option>
          <option value="Rumba">Rumba</option>
          <option value="Samba">Samba</option>
          <option value="Salsa">Salsa</option>
          <option value="Sertanejo">Sertanejo</option>
          <option value="Ska">Ska</option>
          <option value="Singer-Songwriter">Singer-Songwriter</option>
          <option value="Soul">Soul</option>
          <option value="Speed Metal">Speed Metal</option>
          <option value="Stoner rock">Stoner rock</option>
          <option value="Symphonic Metal">Symphonic Metal</option>
          <option value="Synthpop">Synthpop</option>
          <option value="Tango">Tango</option>
          <option value="Techo">Techo</option>
          <option value="Tecnobrega">Tecnobrega</option>
          <option value="Trance">Trance</option>
          <option value="Trap">Trap</option>
          <option value="Trash Metal">Trash Metal</option>
          <option value="White Metal">White Metal</option>
        </select>
        <select
          onChange={(event) => {
            handleInput(event);
          }}
          name="genre2"
          required
        >
          <option value="Acid Jazz">Acid Jazz</option>
          <option value="Adult pop">Adult pop</option>
          <option value="African Blues">African Blues</option>
          <option value="Afrobeat">Afrobeat</option>
          <option value="Afro-Cuban Jazz">Afro-Cuban Jazz</option>
          <option value="Axé">Axé</option>
          <option value="Ambient">Ambient</option>
          <option value="Australian Country">Australian Country</option>
          <option value="Bebop">Bebop</option>
          <option value="Black Metal">Black Metal</option>
          <option value="Bluegrass">Bluegrass</option>
          <option value="Blues Rock">Blues Rock</option>
          <option value="Blues">Blues</option>
          <option value="Bossa Nova">Bossa Nova</option>
          <option value="Brega">Brega</option>
          <option value="Calypso">Calypso</option>
          <option value="Celtic">Celtic</option>
          <option value="Cha-cha-chá">Cha-cha-chá</option>
          <option value="Choro">Choro</option>
          <option value="Classic">Choro</option>
          <option value="Cool jazz">Cool jazz</option>
          <option value="Country">Country</option>
          <option value="Disco">Disco</option>
          <option value="Djent">Djent</option>
          <option value="Drum 'n Bass">Drum 'n Bass</option>
          <option value="Dub">Dub</option>
          <option value="Electroacoustic">Electroacoustic</option>
          <option value="Eletronic">Eletronic</option>
          <option value="Emo">Emo</option>
          <option value="Experimental">Experimental</option>
          <option value="Flamenco">Flamenco</option>
          <option value="Folk">Folk</option>
          <option value="Forró">Forró</option>
          <option value="Funk">Funk</option>
          <option value="Funk Rock">Funk Rock</option>
          <option value="Gothic">Gothic</option>
          <option value="Gospel">Gospel</option>
          <option value="Grunge">Grunge</option>
          <option value="Glam Rock">Glam rock</option>
          <option value="Golden Age Rock ">Glam rock</option>
          <option value="Gypsy">Gypsy</option>
          <option value="Hardcore">Hardcore</option>
          <option value="Hard Rock">Hard Rock</option>
          <option value="Hip Hop">Hip Hop</option>
          <option value="House">House</option>
          <option value="Indie">Indie</option>
          <option value="Industrial">Industrial</option>
          <option value="Jazz Fusion">Jazz Fusion</option>
          <option value="Jazz Rock">Jazz Rock</option>
          <option value="J-Pop">J-Pop</option>
          <option value="J-Jazz">J-Jazz</option>
          <option value="J-Rock">J-Rock</option>
          <option value="K-Pop">K-Pop</option>
          <option value="Kuduro">Kuduro</option>
          <option value="Lo-Fi">Lo-Fi</option>
          <option value="Makossa">Makossa</option>
          <option value="Mambo">Mambo</option>
          <option value="Maracatu">Maracatu</option>
          <option value="Mariachi">Mariachi</option>
          <option value="Math Rock">Math Rock</option>
          <option value="Musique Concrète">Musique Concrète</option>
          <option value="New-age">New-age</option>
          <option value="Nu Metal">Nu Metal</option>
          <option value="Post bop">Post bop</option>
          <option value="Power Metal">Power Metal</option>
          <option value="Prog Rock">Prog Rock</option>
          <option value="Prog Metal">Prog Metal</option>
          <option value="Psychodelic Rock">Psychodelic Rock</option>
          <option value="Post-Rock">Post-Rock</option>
          <option value="Punk">Punk</option>
          <option value="Rap">Rap</option>
          <option value="R&B">R&B</option>
          <option value="Reggae">Reggae</option>
          <option value="Reggaeton">Reggaeton</option>
          <option value="Rockabilly">Rockabilly</option>
          <option value="Rumba">Rumba</option>
          <option value="Samba">Samba</option>
          <option value="Salsa">Salsa</option>
          <option value="Sertanejo">Sertanejo</option>
          <option value="Ska">Ska</option>
          <option value="Singer-Songwriter">Singer-Songwriter</option>
          <option value="Soul">Soul</option>
          <option value="Speed Metal">Speed Metal</option>
          <option value="Stoner rock">Stoner rock</option>
          <option value="Symphonic Metal">Symphonic Metal</option>
          <option value="Synthpop">Synthpop</option>
          <option value="Tango">Tango</option>
          <option value="Techo">Techo</option>
          <option value="Tecnobrega">Tecnobrega</option>
          <option value="Trance">Trance</option>
          <option value="Trap">Trap</option>
          <option value="Trash Metal">Trash Metal</option>
          <option value="White Metal">White Metal</option>
        </select>
        <select
          onChange={(event) => {
            handleInput(event);
          }}
          name="genre3"
          required
        >
          <option value="Acid Jazz">Acid Jazz</option>
          <option value="Adult pop">Adult pop</option>
          <option value="African Blues">African Blues</option>
          <option value="Afrobeat">Afrobeat</option>
          <option value="Afro-Cuban Jazz">Afro-Cuban Jazz</option>
          <option value="Axé">Axé</option>
          <option value="Ambient">Ambient</option>
          <option value="Australian Country">Australian Country</option>
          <option value="Bebop">Bebop</option>
          <option value="Black Metal">Black Metal</option>
          <option value="Bluegrass">Bluegrass</option>
          <option value="Blues Rock">Blues Rock</option>
          <option value="Blues">Blues</option>
          <option value="Bossa Nova">Bossa Nova</option>
          <option value="Brega">Brega</option>
          <option value="Calypso">Calypso</option>
          <option value="Celtic">Celtic</option>
          <option value="Cha-cha-chá">Cha-cha-chá</option>
          <option value="Choro">Choro</option>
          <option value="Classic">Choro</option>
          <option value="Cool jazz">Cool jazz</option>
          <option value="Country">Country</option>
          <option value="Disco">Disco</option>
          <option value="Djent">Djent</option>
          <option value="Drum 'n Bass">Drum 'n Bass</option>
          <option value="Dub">Dub</option>
          <option value="Electroacoustic">Electroacoustic</option>
          <option value="Eletronic">Eletronic</option>
          <option value="Emo">Emo</option>
          <option value="Experimental">Experimental</option>
          <option value="Flamenco">Flamenco</option>
          <option value="Folk">Folk</option>
          <option value="Forró">Forró</option>
          <option value="Funk">Funk</option>
          <option value="Funk Rock">Funk Rock</option>
          <option value="Gothic">Gothic</option>
          <option value="Gospel">Gospel</option>
          <option value="Grunge">Grunge</option>
          <option value="Glam Rock">Glam rock</option>
          <option value="Golden Age Rock ">Glam rock</option>
          <option value="Gypsy">Gypsy</option>
          <option value="Hardcore">Hardcore</option>
          <option value="Hard Rock">Hard Rock</option>
          <option value="Hip Hop">Hip Hop</option>
          <option value="House">House</option>
          <option value="Indie">Indie</option>
          <option value="Industrial">Industrial</option>
          <option value="Jazz Fusion">Jazz Fusion</option>
          <option value="Jazz Rock">Jazz Rock</option>
          <option value="J-Pop">J-Pop</option>
          <option value="J-Jazz">J-Jazz</option>
          <option value="J-Rock">J-Rock</option>
          <option value="K-Pop">K-Pop</option>
          <option value="Kuduro">Kuduro</option>
          <option value="Lo-Fi">Lo-Fi</option>
          <option value="Makossa">Makossa</option>
          <option value="Mambo">Mambo</option>
          <option value="Maracatu">Maracatu</option>
          <option value="Mariachi">Mariachi</option>
          <option value="Math Rock">Math Rock</option>
          <option value="Musique Concrète">Musique Concrète</option>
          <option value="New-age">New-age</option>
          <option value="Nu Metal">Nu Metal</option>
          <option value="Post bop">Post bop</option>
          <option value="Power Metal">Power Metal</option>
          <option value="Prog Rock">Prog Rock</option>
          <option value="Prog Metal">Prog Metal</option>
          <option value="Psychodelic Rock">Psychodelic Rock</option>
          <option value="Post-Rock">Post-Rock</option>
          <option value="Punk">Punk</option>
          <option value="Rap">Rap</option>
          <option value="R&B">R&B</option>
          <option value="Reggae">Reggae</option>
          <option value="Reggaeton">Reggaeton</option>
          <option value="Rockabilly">Rockabilly</option>
          <option value="Rumba">Rumba</option>
          <option value="Samba">Samba</option>
          <option value="Salsa">Salsa</option>
          <option value="Sertanejo">Sertanejo</option>
          <option value="Ska">Ska</option>
          <option value="Singer-Songwriter">Singer-Songwriter</option>
          <option value="Soul">Soul</option>
          <option value="Speed Metal">Speed Metal</option>
          <option value="Stoner rock">Stoner rock</option>
          <option value="Symphonic Metal">Symphonic Metal</option>
          <option value="Synthpop">Synthpop</option>
          <option value="Tango">Tango</option>
          <option value="Techo">Techo</option>
          <option value="Tecnobrega">Tecnobrega</option>
          <option value="Trance">Trance</option>
          <option value="Trap">Trap</option>
          <option value="Trash Metal">Trash Metal</option>
          <option value="White Metal">White Metal</option>
        </select>

        <button type="submit">Submit</button>
      </form>
      <img
        src={
          form.picture
            ? form.picture
            : "https://www.masterresellrights.com/pages/SpinnerProSoftware/images/your-face-here.jpg"
        }
        alt="profile"
      />
    </div>
  );
}

export default SignUp;
