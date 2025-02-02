import { useRef } from "react";
import { Accordion } from "react-bootstrap";
import { FaTimes, FaBars, FaAddressCard } from "react-icons/fa";
import "../../App.css";

const UserWallAcc = () => {
  const WallRef = useRef();

  const showRecord = () => {
    WallRef.current.classList.toggle("record");
  };

  const WallDetails = [
    {
      id: 1,
      icon: require("../../assests/dollar.png"),
      curr: "Dollar (USD)",
      unit: "USD",
    },
    {
      id: 2,
      icon: require("../../assests/bitcoin.png"),
      curr: "Bitcoin (BTC)",
      unit: "BTC",
    },
    {
      id: 3,
      icon: require("../../assests/ethereum.png"),
      curr: "Ethereum (ETH)",
      unit: "ETH",
    },
    {
      id: 4,
      icon: require("../../assests/dollar.png"),
      curr: "Tether (USDT)",
      unit: "USDT",
    },
    {
      id: 5,
      icon: require("../../assests/litecoin.png"),
      curr: "Litecoin (LTC)",
      unit: "LTC",
    },
  ];
  return (
    <div>
      <div
        className="d-flex justify-content-between align-items-center p-2 rounded"
        style={{ backgroundColor: "#2A3042" }}
      >
        <div>
          <FaAddressCard size={35} />
          <p>Wallet</p>
        </div>
        <div>
          <FaBars size={30} onClick={showRecord} />
        </div>
      </div>
      <div ref={WallRef} className="user-wall-desk">
          <div className="row">
            <div className="col-md-2">
              <p>Icon</p>
            </div>
            <div className="col-md-2">
              <p>Currency</p>
            </div>
            <div className="col-md-4">
              <p>Balance</p>
            </div>
            <div className="col-md-2">
              <h6>Total Deposit</h6>
              <p>$0.00 USD</p>
            </div>
          </div>
          <div style={{ backgroundColor: "#2A3042" }} className="">
            {WallDetails.map((item) => {
              return (
                <div className="row mb-2" key={item.id}>
                  <div className="col-md-2">
                    <img
                      src={item.icon}
                      alt=""
                      style={{ height: "50px", width: "50px" }}
                    />
                  </div>
                  <div className="col-md-2">
                    <h4>Bitcoin</h4>
                  </div>
                  <div className="col-md-4">
                    <h2>0.00USD</h2>
                    <p>0.00000000BTC</p>
                  </div>
                  <div className="col-md-2 d-flex gap-2">
                    <div>
                      <button className="btn btn-success">Deposit</button>
                    </div>
                    <div>
                      <button className="btn btn-transparent border border-light text-light">
                        Exchange
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="my-3 user-wall-mob">
          {WallDetails.map((item) => (
            <Accordion className="w-100 bg-dark" key={item.id}>
              <Accordion.Item eventKey="0" className="bg-dark text-light">
                <Accordion.Header className="bg-dark text-light">
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <img
                      src={item.icon}
                      alt=""
                      style={{ height: "30px", width: "30px" }}
                    />
                    <p>{item.curr}</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p>$0.00USD</p>
                    </div>
                    <div className="d-flex">
                      <div>
                        <button className="btn btn-success">Deposit</button>
                      </div>
                      <div>
                        <button className="btn btn-transparent border border-light text-light">
                          Exchange
                        </button>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
        </div>

    </div>
  );
};

export default UserWallAcc;
