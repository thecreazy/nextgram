import React from 'react'
import Router from 'next/router'
import styled from 'styled-components'

import Modal from '../components/modal'

const PhotoList = styled.div`
  padding: 50px;
  text-align: center;
`

const Photo = styled.div`
  display: inline-block;
`

const PhotoLink = styled.a`
  color: #333;
  verticalAlign: middle;
  cursor: pointer;
  background: #eee;
  display: inline-block;
  width: 250px;
  height: 250px;
  line-height: 250px;
  margin: 10px;
  border: 2px solid transparent;
  &:hover {
    borderColor: blue;
  }
`

export default class extends React.Component {
  static getInitialProps () {
    return {
      photos: new Array(15).fill(0).map((v, k) => k + 1)
    }
  }

  constructor (props) {
    super(props)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  // handling escape close
  componentDidMount () {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown (e) {
    if (!this.props.url.query.photoId) return
    if (e.keyCode === 27) {
      this.props.url.back()
    }
  }

  dismissModal () {
    Router.push('/')
  }

  showPhoto (e, id) {
    e.preventDefault()
    Router.push(`/?photoId=${id}`, `/photo?id=${id}`)
  }

  

  render () {
    const { url, photos } = this.props
    return (
      <PhotoList>
        {
          url.query.photoId &&
            <Modal
              id={url.query.photoId}
              onDismiss={() => this.dismissModal()}
            />
        }
        {
          photos.map((id) => (
            <Photo key={id}>
              <PhotoLink
                href={`/photo?id=${id}`}
                onClick={(e) => this.showPhoto(e, id)}
              >
                {id}
              </PhotoLink>
            </Photo>
          ))
        }
      </PhotoList>
    )
  }
}
