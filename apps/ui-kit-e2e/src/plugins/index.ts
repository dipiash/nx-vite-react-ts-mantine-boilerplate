import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin'

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config)
}
