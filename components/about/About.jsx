import Image from "next/image";
import Brain from "../../public/assets/brain.svg";
import CogWheel from "../../public/assets/cogwheels.svg";
import Blockchain from "../../public/assets/blockchain.svg";
import ExchangeRate from "../../public/assets/exchange-rate.svg";
import Diver from "../../public/assets/scuba.svg";

const About = () => {
  return (
    <section
      className="container px-4 pb-4 my-10 bg-pink-50 lg:grid lg:grid-cols-2"
      id="about"
    >
      <h2 className="text-3xl lg:text-5xl lg:text-left lg:col-span-4 py-6 font-normal text-center font-raleway">
        A BIT ABOUT ME...
      </h2>
      <div className="hidden lg:flex items-center justify-center">
        <Image
          src={Brain}
          alt="about"
          width="600"
          height="500"
          placeholder="blur"
          quality="100"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwePSwuJDJJQExLR0BGRVBac2JQVW1WRUZkiGVtd3uBgoFOYI2XjH2Wc36BfP/bAEMBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAUYCrwMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAgEDBgQF/8QAGRABAQEBAQEAAAAAAAAAAAAAAAERAhIh/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABoRAQEBAQEBAQAAAAAAAAAAAAABETECEiH/2gAMAwEAAhEDEQA/AP3Rg6DQAAAGsaAADRjUBrAGgAAAAAAIAMAABgAMY1gMY1gjKytZQTWVtZQZU1tZQTU1VTQTU1VTUE1NVU0EVNVU1RNRVVNBFTVVNBFRV1FBFTVVFBNRV1FVEVNVUVRlTW1NUYxtYqjWNBUbExURVRUTFQFxURFRBcVERUFVFRMVEFRUTGwFRrI2ApqWg1rGg0AGjGoPRANIAA0YA0AGjAGtYINGNAawBowBowBowQAAGAAxrAGDAGDBCprWUGVlbU0GVlbU0GVNbWUE1NVUUGVFVU1BNTVVFUTU1VRQTUVdRQTUVVRQTUVdRREVNVUVRNRVVNUTU1tTVGUZRRonWwVcVERURVxURFQFxURFxBUVExUFVFREVEFRUTFQFRsTGwFNY0GtS0GtYA0AHohjVQAAawBowBrWANGNBowQaADRgDRgDRgADEGsABgAMGAMGCCWsBlZW1NBlZW1NBlTW1NBlTW1NBlTW1NBNTVVFBNTVVFBNRV1FBNRVVFETUVVRQTUVVRVE1NbUWqMtTa21FqhazWWs1oVrZUa2UV0lVK5yqlRXSKjnKuILi45xcRVxURFQFxURFQFRUTGxBcamNgKaloKaloNaloNGAPRiRUUMAaMAaMAUMAa1LQaMEFDAGjAGjAGjAGsBAGAAwAYMAYMEGUYBU1tZQZU1tTQZWVtTQZU1tTQTU1VRUGVNbU1RNTW1NBNRVVFBNRVVNERUVdc6CaiqqLVE2otVa59VUZa52t6rna1BtqdZaxpVemzpAqu0q5XCV056SxXaVUrlKuVlXWVUc5VyoOkVHOVcqC4qIipQXGxEqoC42JlbEFNS0FNS0FDAGjGg9CazTVRprNNBRqdNBQzTQUJNBQzTQUJ1ug1up01BQzTQaMNBujNNBoxgNGCAM0AYMEakYAyjAKylTQKmtqaBU1tTQZU1tTQZU1tTQTU1tTQTU1tTQTUVVRRE1FVai0E2otVai1RNrnaq1z6oieq59VXVcuq1EZ1UWlrGmpAA1QA0FSpFHXnp15r55XTnosad5VyuPNdJWR1lVK5yqlQdJVSucq5UFxURK2UFxURKqUFa3U60Fa3UiCtbqdNBWjNNB6HTWaa0jdNZpoK01OmoK1up00FaanW6DdbqdNBWmp1ugrTU6aCtNZpqDTWaaDdNZpoN01mmg1ms00Rus1mmordYzTRDWaazQKw1Og2ppay0Cppay0GVlLU2gVNKm0CorbU2gy1NrbUWgyoqrUWiMtRW2otBlqLW2otBNqLVdVz6qieq59VXVceqsZqeq59VvVQ0sgME1oATQawNGjGtSgqVLWiXHXnp05rhKvnosbfRKuVx5q5WR2lVK5SrlRHSVUrnKqUFyqlRK2VBet1Gq0Fa3U6aC9NTpoK1up00HodNTpqorTU6aCtbqdNBWmp00Fa3U6agrTU63QVpqdNBWt1Gt0FaanTQVpqdNQVpqdboN01OmgrWazTRG6zWaaDdZrNZqDdZprNA1ms1mg21Npay0C1NrbU2gWptLU2gWptbam0GWptLU2gy1NrbUWojLU2ttRaoy1FrbUWgy1ztVa59UGdVz6req59VUR1XLqq6rl1VSfqbdYMS1trAZ1QBAABoxrUo0Y10lRsqpUNlaWXHXnp156fPKvnrBvr6JVyuHPTpKyjtKqVylVKg6Sqlc5VSguVWucqtBet1GmoL1uo1ugrTU6aD0Omp01WVa3UaaC9NTpoK01OmgvTU6aCtbqNbqCtNTrdBWmp00FaanW6CtNTpqCtNTpoK1ms00G6anTRG6anTQbprNZqDdZrNZoN1ms1mg21Npay0C1Npam0G2ptLU2gWptLU2gWotbam1EZam1tqLQZai1tqLQZai1tqLQZa59VXVcuqqM6rj3Vd9OPVVlPVc7W9XaktdJABhQAAAAAAABrBZcGtYOkqKlVKhsrayukuOvPThKqUdOvolXK4c9Ok6TEx2lbK5SrlRHSVsrnKqVBet1Gt0F63UaaC9NTpoPQ6anTRlWmp00F6ajW6CtNTpoL01OmgrW6jW6CtbqNNQXpqdNBWt1GmgvTU6aCtNTpqCtNTpoN01OmiK1ms1mgrWazWag3WazWaDdZrNZoNtZay1loFrLWWstAtTaWptAtTa21FqBam0tTaIWotbai0GWptLU2gm1FrbXPqiM6rl1VdVx76VKnquXfSu+nK/TV8xgDLYAAAAAAAAAAAA1gaNawdJ6RUqpUNlb1ZXSVXPTnK2VXSV3nS50+eXFzpMMd5VSuM6VKiOut1zlboOmt1z1uoL01Gt0HotNRpowvTUa3QVpqdNBemo1ugrW6jTQXpqdNBemo1uoL01Gt0FaanTQVrdRpoK1uo01Bemo00FaanTRFazU6aCtZrNZoN1ms1moN1ms1mg21lrLWWgWstZay0C1lrLWWgWptLU2ohai1tqLQLUWttRaDLUWttRaDOq5dVXVcuuhE99OPVV10499GpJqertYCOgAAAAAAAAAAAAAAAAADWpa3PSKlVK5tldJVlx01uolbKrcrpOlzpx1ujTvOlTpwnSp0mGO2t1xnSvQmOmmufpvpB6TTU6ajmrTU6aCtbqNNBemo1ugvTUa3QVrdRpoL1uo00F6anTUF6ajTQXpqdNBWmp01BWmp00FaanWaIrTU6aDdNTpqDdZrNZoN1ms1mg21lrLWWgWstZay0C1Npam1AtZay1Noham0tTaDLU2lqLQZajqt6rn1URPVce+ld9OPXRqdZ105Nt2sG5MABQAAAAAAAAAAAAAAAAAAAGjBZcFNlSOk9DpK3XOVsq61KvW6nTV1rV6anTV1dX6PSdNB6fTU6ay5K01OmgvTUaagvTU6aC9NRrdBemo1ugrW6jTQXrdRpqC9NTpoK1uo00F6ajTUF6ajTQVpqdNEVrNTpoK1ms1moK1mp1mgrWazWaDbU2stZaDbWWstTag21Npam0C1Npam0QtRaWptQZai1trn1QZ1XPrpvXTj30mpU9dOXVb10giyACtAAAAAAAAAAAAAAAAAAAAAAAAAANGCyitbqG619C9NRrda1dXpqNNNXXp9NTpqsq01OmgvTUaaC9bqNNQXpqdNBemo1ugvTUa3QXpqNbqCtNTpoL01GmgvTU6agrTU6aCtNTrNEVpqdNQbpqdNBus1ms0G6zWazQbay1lqbUG2stZay0C1Npam0C1Npai1BtqLS1FqIWuXXTeq5ddJaM76ceum9dOdukhIygNNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPSaanTXYVrdRpoL01Gt0Fa3UaaC9bqNNQXpqdNBemp00F6anTUFa3UaaC9NTpoK01OmoK01OmgrTU6agrWanTQVrNZrNBump1moitZqdZoKtTay1loNtTay1lqBam0tTaBam1lqbUC1z6p1XPrpm0Z105ddN66curpInWW6wG2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7+mp012F6ajTQXpqdNBemo1ugvTUa3UFa3Ua3QVrdRrdQVpqdNBemp00Fa3UaagvTU6aCtNTpqCtZqdNBWmp1mgrWazWagrWanTQbrNZrNQbam1lrLQbam1lqbUG2ptZam1NC1F6L059dM2h105ddN66ceutWRDq6kG1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAft6ajTXYXpqdNBWt1GmgvTU6agvTU6aC9NTpoL01OmoL01OmgrW6jW6grTU6aCtbqNNQXpqNNBWmp00FazWazUFazWazQbrNZrNQbrLWay0G2ptZay1BtqbWWptTQtRaWotYtUtc+ujrpy66WQZ11qQdEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfraanTXZFa3UaaC9NTpoL01OmoL01Gt0F6anTRV6anTUF6anTQVrdRrdQVpqdNBWmp01BWmp01BWmp00G6azWag3TU6aDdZrNZqDdTay1lqK21NrLU2s2jbUWlqLWd1S1HVLXPrpqQZ10hrHRkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+lpqdNdkVrdRrdBWmp00F6anTUF6anW6CtNTrdQVpqdboK01Ot1FVpqdNBWms01BWmp01BWs1mmg3TWazUFazWazUVums1mg3WazU2sjbU2lqbWbVLU2lqbU6FqLS1HVakVnXSK2pbiUAVkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB92t1I7sq01IgrW6kBWt1LRW63UtQUalqChgChgiq01LUG6awQa1ICmawQaawRQ1msQbrNGWoFqbS1NrNqttTaVNrKlqbS1FrUgzqorbWVuFZWA0wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+trB3YbowBQwRVNS0GtS1BrWCKoY1BowBrWCK0BAawQAEUYCAwEGMrams1S1LWVlWVNbU1YMtc7V1zrcVjK2srTNYArIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD6gHdhoANARWgA1oIDQRWgINABoCKAINAQYAijAQGAgysoMVUsoIrKmg1BFRQbisSCsUAVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z"
          className=""
        />
      </div>
      <div className="md:px-16 lg:pl-0">
        <div className="mb-6 flex">
          <span>
            <div className="rounded-full w-24 h-24 bg-yellow-200 flex items-center justify-center">
              <Image src={CogWheel} alt="gear-wheel" />
            </div>
          </span>
          <div className="pl-4">
            <p className="font-sans font-normal md:text-lg">
              Self improvement is a value I hold close. Each day I strive to not
              only level up my skills, but to also positively impact anyone whom
              I come in touch with during that process.
            </p>
          </div>
        </div>
        <div className="mb-6 flex">
          <span>
            <div className="rounded-full w-24 h-24 flex items-center justify-center">
              <Image
                src={Blockchain}
                alt="blockchain development"
                className="rounded-full"
              />
            </div>
          </span>
          <div className="pl-4">
            <p className="font-sans font-normal md:text-lg">
              Im eager to work on challenging projects alongside other talented
              developers and eventually id like to explore emerging technologies
              such as blockchain.
            </p>
          </div>
        </div>
        <div className="mb-6 flex">
          <span>
            <div className="rounded-full w-24 h-24 bg-green-200 flex items-center justify-center">
              <Image src={ExchangeRate} alt="chart" width={70} height={70} />
            </div>
          </span>
          <div className="pl-4">
            <p className="font-sans font-normal md:text-lg">
              Aside from coding, ive been involved in the financial markets as a
              trader for just over a decade. I spend much of my time online
              analyzing charts, managing trades, and reading financial news
              articles. <mark>PRO TIP:</mark> buy and hold some bitcoin!
            </p>
          </div>
        </div>
        <div className="mb-6 flex">
          <span>
            <div className="rounded-full w-24 h-24 bg-blue-200 flex items-center justify-center">
              <Image src={Diver} alt="diver" />
            </div>
          </span>
          <div className="pl-4">
            <p className="font-sans font-normal md:text-lg">
              Despite the time I spend online, im a big outdoors guy. I love
              playing sports, running at the track and playing pickup
              basketball. I love to explore. Skydiving is on my bucket list, and
              scuba diving is my favorite hobby. I go whenever possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
