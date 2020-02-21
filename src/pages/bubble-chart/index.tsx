import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetch, selectType, selectBubble } from './_actions'
import { Page } from './page'
import CircularProgress from '@material-ui/core/CircularProgress'

const mapStateToProps = (state: AppState) => ({
  bubbles: state.bubbles.bubbles,
  fetchStatus: state.bubbles.statusses.fetch,
  selectedBubble: state.bubbles.selectedBubble,
  selectedType: state.bubbles.selectedType,
})

const mapDispatchToProps = {
  fetch,
  selectBubble,
  selectType,
}

type Props = {
  bubbles: Bubble[]
  fetch: () => void
  fetchStatus: FetchStatus
  selectBubble: (
    selectedType: BubbleType | null,
    selectedBubble: Bubble | null
  ) => void
  selectedBubble: Bubble | null
  selectedType: BubbleType | null
  selectType: (selectedType: BubbleType | null) => void
}

export class BubbleChart extends PureComponent<Props> {
  componentDidMount() {
    const { fetch, fetchStatus } = this.props
    if (fetchStatus !== 'LOADING' && fetchStatus !== 'SUCCESS') {
      fetch()
    }
  }

  render() {
    const {
      bubbles,
      selectType,
      fetchStatus,
      selectedBubble,
      selectedType,
    } = this.props
    const isLoading = fetchStatus === 'LOADING'

    return (
      <main>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Page
            bubbles={bubbles}
            selectBubble={selectBubble}
            selectedBubble={selectedBubble}
            selectedType={selectedType}
            selectType={selectType}
          />
        )}
      </main>
    )
  }
}

export const BubbleChartPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(BubbleChart)
