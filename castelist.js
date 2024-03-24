import React from 'react'
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';

function CasteList() {
  return (
    <>
    <div>
        <h3 className='text-center fw-bold m-3'>List of Caste & Sub-Castes in India</h3>
        <p className='text-center text-primary fw-bold m-3'>Below are the list of caste comes under Besta Community based on States & Region across  India.</p>
    </div>
      <Row xs={1} md={2} className="g-4 text-center m-4 ">
       
      <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-dark text-center">Andhra Pradesh</Card.Title>
              <Card.Text className='fw-bold'>
              Agnikula kshatriya, Bestha, Gangaputra, Gangavar, Neyyalla, Goondla, Jalari, Pattapu, Pali, Vadabalija,
          Vanne kapu, Palli Kapu, Jalkshatriya, Vanyekula Kshatriya.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Assam</Card.Title> 
              <Card.Text className='fw-bold'>
              Bhoi, Mallah, Jhalo Malo,Jhalo, Malo, Malakar,Namsudra, Kaibarta, Patni, Kotal

              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Bihar</Card.Title>
              <Card.Text className='fw-bold'>
              Bind,Dhimar Dheemar Dhivar Dhewar, Godia, Gond, Gariya, Guria, Raj Gond, Kewat Keot, Kharwar Khairwar
          Kherwar, Khagi, Kaibarta, Kahar, Manhji, ManjhiMajhwar, Nishad, Tiyar, Tyar, Tiar, Mallah
        
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Chandigarh</Card.Title>
              <Card.Text className='fw-bold'>
              Gond, Gariya, Guria, Raj Gond, Kewat Keot, Kharwar Khairwar Kherwar, Khagi, Manhji, ManjhiMajhwar, Nishad,
          Tiyar, Tyar, Tiar, Mallah
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Delhi</Card.Title>
              <Card.Text className='fw-bold'>
              Dhimar, Dheemar,Dhinwar, Dhewar, Kewat, Keot, Nishad, Godia, Gond Gariya, Guriya, Raj Gond, Kahar, Jhimar,
          Jhinwar, Jhiwar,Jhir,Jheer, Mallah, Turah, Turaha,Tureha,Turaiha
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Gujarat</Card.Title>
              <Card.Text className='fw-bold'>
              Bhoi, Dhinwar BhoiGadhar Bhoi KhadiBhoi,Khase Bhoi, Zinga Bhoi Pardeshi Bhoi, Raj Bhoi, Dhiwar,
          DheemarDhimar, Dhivar,Dhevra,Gond, Raj Gond,Koli, Mahadev Koli, Malhar Koli, Donger Koli, Kolcha, Kolga,
          Tokre Koli, Kirat,Keer, Kewat, Kevat, Kahar, Dhuria Kahar Gondia Kahar,Khairwar, Mallah, Malhar,Machhendra,
          Machhawa, Nishad, Tindel, Palewar
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Goa</Card.Title>
              <Card.Text className='fw-bold'>
              Nayaka
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Jammu & Kashmir ,Haryana & Himachal Pradesh </Card.Title>
              <Card.Text className='fw-bold'>
              Dhimar, Jhimar, KaharDheemar Jhinwar, MallahDhivar Jhiwar, JhirDhewar Jheer

              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Kerala</Card.Title>
              <Card.Text className='fw-bold'>
              Dhevara (Arya, Vala, Mukkuva, Mukaya, Bhoi,Mulaya, AravathiMale Araya), Meenugara Manigara, Mogera

              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Karnataka</Card.Title>
              <Card.Text className='fw-bold'>
              Ambiga, Bestha, Mogaveera, kabbaligas, Bharika, Barikera, Marakula, Bhoyi,bhovi, Mogera, Bheesmakula,
          Melanta, jamadar, Gangaputra, Meddera, gangamatha, Gangakula, Machida,Gange Makkalu Machimar, Gaurimatha
          Machala, Gangarassur Machava,
          Goni Kara, Gond, Raj Gond, Mudiraja, Nayka, Harikanthra Naykara, Jalagera Nayaka, Kabbera,
          Neeraganti, Korach, Nalekera, Koli, Parivara,Sunagara, Sephaliga, Kharvi,
          Soothkula, Meenugara, Manigara, Thoreya, Vanyekula Kshatriya, Siviyar,
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Madhya Pradesh</Card.Title>
              <Card.Text className='fw-bold'>
              Dhimar, Dheemar, Dhivar, Dhewar, Dewar,Bhoi (Jhinga),Godia, Gond,Gariya,
          Guria, Raj Gond,Kewat, Kevat, Kharwar, Khairwar Kherwar,Keer,Kahar, Mallah,
          Manhji, Majhi, Majhwar, Nishad, Raikwar, Turha, Turah, Turaha, Tureha,Turaiha,
          Tiyar, Tyar, Tiar
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Maharastra</Card.Title>
              <Card.Text className='fw-bold'>
              Bhoi, Dhinwar Bhoi Gadhar Bhoi KhadiBhoi, Khase Bhoi, Zinga Bhoi,
          Pardeshi Bhoi, Raj Bhoi., Dhiwar, Dheemar,Dhimar, Dhivar, Daivar,Koli Dhor,
          Mahadev Koli, Malhar Koli, Donger Koli, Koleha Kolcha, Kolga, Tokre Koli,
          Kahar, Dhuria Kahar,Godia Kahar,GondKahar,Kirat, Keer, Kewat, Kevat,Kharwar,
          Khairwar ,Machhendra, Machhawa,Manzi, Gond, Raj Gond, ., Tindel, Palewar,
          Manzi, Malhar,Nishad
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Manipur</Card.Title>
              <Card.Text className='fw-bold'>
              Namsudra, Patni
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Meghalaya & Mizoram</Card.Title>
              <Card.Text className='fw-bold'>
              Jhalo- Malo, Jhalo, Malo, Kaibartta, Jaliya, Namsudra, Patni, Bhoi

              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Odisha</Card.Title>
              <Card.Text className='fw-bold'>
              Dewar, Dhewar, Dhivar, Bhoi. Bhovi, Gond, Gondo, Jalia, Jaliya, Jhalo- Malo,
          Mala, Zala, Kaibartta, Kaibarta Jalia,Keuta, Kewata, Keute, Kevt, Namdas,
          Namsudra,Kharwar, Khairwar Khirwar, Tiyar, Tiar, Tior, Koli, Malhar.PUNJAB,
          Dhewar, Jhimar Jhinwar, Jhiwar, Jhir, Jheer, Kahar, Mallah
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Rajasthan</Card.Title>
              <Card.Text className='fw-bold'>
               Dhimar, Dheemar, Dhivar, Bhoi,Gond, Godia, Gariya, Guria, Raj Gond,
              Kahar, Kewat, Keot, Jhimar Jhinwar, Jhiwar, Jhir, Jheer, Keer,
              Mallah,Manhji, Majhi, Majhwar, Riakwar,Koli,Dhor, Tokre Koli,Kolcha, Kolgha
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Tripura</Card.Title>
              <Card.Text className='fw-bold'>
              Jalkaibatta, Kahar, Keot, Namsudra, Patni
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Tamil Nadu</Card.Title>
              <Card.Text className='fw-bold'>
              Bostha, Bosthar, Narikanthra, Kharvi, Kebber, Kabbera, Meenugara,
            Manigara, Mukkavar Mukkuvar Mukayar, Parivara, Paravar, Meanevar
            ( Partharaja, Kulam, Pattanavar, Sembadavar), Siviyar, Siviar
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">Uttar Pradesh</Card.Title>
              <Card.Text className='fw-bold'>
              Dhimar, Dheemar, Dhinwar, Dhewar, Kharwar, Khairwar Khirwar, Godia, Gond,
            Gariya, Guria, Raj Gond, Mallah, Bind, Manhji, Majhi, Majhwar,
            Jhimar Jhinwar, Jhir, Jheer Jhiwar, Nishad, Kahar, Riakwar,
            Kewat, Keot, Turah, Turaha, Tureha, Turaiha
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="fw-bold text-bg-primary text-center">West Bengal</Card.Title>
              <Card.Text className='fw-bold'>
              Bind, Baidi, Chaia, Chain, Berchain, Duley, Dewar, Dhewar, Dhiver, Gond,
            Gondo, Gurrhi, Gonti, Jhalo- Malo, Malo, Kaibarta, Jaliya Kaibarta,
            Kotal, Keuta, Keweta, Keuta, Kevt, Kewet, Keyot, Keot, Kadma,
            KolaKharwar, Khirwar, Khairwar, Mallah, Meta, Namdas, Namsudra,
            Patni, Tiyar, Sardia.
              </Card.Text>
            </Card.Body>
          </Card>

    </Row>
    <br/>

    
    </>
  )
}

export default CasteList