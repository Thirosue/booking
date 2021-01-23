import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => {
  return (<>
    <section className="hero">
      <figure>
        <Img
          fluid={data.hero.childImageSharp.fluid}
          alt=""
          style={{ height: "100%" }}
        />
      </figure>
      <div className="catch">
        <h1>
          There is no love sincerer than
          <br />
          the love of nails.
        </h1>
      </div>
      <div className="wave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1366 229.5"
          fill="#fff"
        >
          <path
            d="M1369,6.3C1222.5-12.2,1189.5,8,919.2,96.6C665,179.8,160,141.7-2,53.1v150l1371-14.2V6.3z"
            opacity=".53"
          />
          <path d="M1369 229.5V55.8c-9.5-2.4-19.2-4.4-28.9-5.8-196.9-29.9-203.4-15.8-503.9 82.6-219.8 72-627.6 53.2-838.2-10.5v107.4h1371z" />
        </svg>
      </div>
    </section>
    <section className="food">
      <div className="container">
        <h2 className="bar">
          Our <span>Services</span>
        </h2>
        <div className="details">
          <div className="detail">
            <figure>
              <Img fluid={data.fruit.childImageSharp.fluid} alt="" />
            </figure>
            <br />
            <p>Hand</p>
            <p>
              ジェルネイルを中心に指先を綺麗に
            </p>
          </div>
          <div className="detail">
            <figure>
              <Img fluid={data.grain.childImageSharp.fluid} alt="" />
            </figure>
            <br />
            <p>Foot</p>
            <p>
              素足にも自信が持てるフットネイル
            </p>
          </div>
          <div className="detail">
            <figure>
              <Img fluid={data.beverage.childImageSharp.fluid} alt="" />
            </figure>
            <br />
            <p>Care</p>
            <p>
              フットネイルがより映える魅せられる足へ
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="photo">
      <h2 className="sr-only">Photo</h2>
      <figure>
        <Img
          fluid={data.berry.childImageSharp.fluid}
          alt="赤く熟したベリー"
          style={{ height: "100%" }}
        />
      </figure>
    </section>
  </>)
}

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    fruit: file(relativePath: { eq: "fruit.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    grain: file(relativePath: { eq: "grain.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beverage: file(relativePath: { eq: "beverage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    berry: file(relativePath: { eq: "berry.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
