import React from 'react';
import { createUseStyles } from "react-jss";
import background from "../images/Back.png";
import backgroundSelected from "../images/BackSelected.png";
import backgroundDisabled from "../images/BackDisabled.png";
import { useState } from 'react';

const useStyles = createUseStyles({
    card: {
        display: "flex",
        flexDirection: 'column',
        marginBottom: 25
    },
    container: {
        padding: "21px 16px 16px 48px",
        backgroundImage: "url(" + background + ")",
        width: 320,
        height: 480,
        boxSizing: 'border-box',
        display: 'block',
        marginBottom: 14,
        marginLeft: 10,
        marginRight: 10,
        fontFamily: "Trebuchet MS" + "!important",
        position: "relative"

    },
    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    },
    head: {
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "19px",
        color: "#666",
        marginBottom: 5
    },
    title: {
        fontWeight: 700,
        fontSize: 48,
        lineHeight: "56px",
        color: "#000",
    },
    flavour: {
        fontWeight: 700,
        fontSize: 24,
        lineHeight: "28px",
        color: "#000",
        marginBottom: 15,
    },
    portionsAmount: {
        textAlign: "left",
        maxWidth: 130,
        boxSizing: 'border-box',
        fontSize: 14,
        " & p": {
            display: 'inline-block',
            fontWeight: 700,
        }
    },
    weight: {
        position: "absolute",
        right: 16,
        bottom: 16,
        borderRadius: "50%",
        width: 80,
        height: 80,
        backgroundColor: "#2EA8E6",
        fontSize: 42,
        color: "#fff",
        lineHeight: "22px",
        paddingTop: 20,
        boxSizing: "border-box",
        " & p": {
            fontSize: 21,
            lineHeight: "22px",
            marginTop: 6
        }

    },
    activeDescription: {
        fontSize: 13,
        color: "#fff",
        " & a": {
            color: "#2EA8E6",
            cursor: "pointer"
        }
    },
    selectedDescription: {
        fontSize: 13,
        color: "#fff",

    },
    isOverDescription: {
        fontSize: 13,
        color: "#FFFF66",
    },


});

const Card = ({ card }) => {
    const classes = useStyles();
    const [hovered, setHovered] = useState(false);
    const [cardStatus, setCardStatus] = useState(card.cardStatus)

    const SelectHandler = () => {
        setHovered(false)
        cardStatus === "active"
            ? setCardStatus("selected") : cardStatus === "selected"
                ? setCardStatus("active") : setCardStatus("disabled")
    }
    const HoverHandler = () => {
        cardStatus === "selected" ? setHovered(true) : setHovered(false)
    }


    return (
        <div className={classes.card}>
            <div className={classes.container}

                onMouseLeave={() => {
                    HoverHandler();
                }}
                onClick={() => {
                    SelectHandler()

                }}
                style={cardStatus === "active"
                    ? { backgroundImage: `url(${background})` }
                    : cardStatus === "selected"
                        ? { backgroundImage: `url(${backgroundSelected})` }
                        : { backgroundImage: `url(${backgroundDisabled})` }
                }>
                <div className={classes.content}>
                    {hovered
                        ? <div className={classes.head} style={{ color: "#E62E7A" }}>Котэ не одобряет?</div>
                        : <div className={classes.head} >Сказочное заморское яство</div>}

                    <h2 className={classes.title}>Нямушка</h2>
                    <div className={classes.flavour}>{card.flavour}</div>
                    <div className={classes.portionsAmount}> <p>{card.portionsAmount}</p> {card.portionsText} <br /> <p>{card.presentAmount}</p> {card.present}</div>
                </div>
                <div className={classes.weight}
                    style={cardStatus === "active"
                        ? { backgroundColor: `#2EA8E6` }
                        : cardStatus === "selected"
                            ? { backgroundColor: `#D91667` }
                            : { backgroundColor: `#B3B3B3` }}
                >{card.weight}<br /><p>кг</p></div>
            </div>
            {cardStatus === "active" ?
                <div className={classes.activeDescription}>Чего сидишь? Порадуй котэ,
                    <a onClick={() => {
                        SelectHandler()
                    }}> купи.</a>
                </div>
                : cardStatus === "selected" ?
                    <div className={classes.selectedDescription}>{card.description}</div>
                    : <div className={classes.isOverDescription}>{card.isOver}</div>}

        </div>

    )
}

export default Card