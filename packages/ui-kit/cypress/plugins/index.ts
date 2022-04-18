import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Task = (value: any) => any

interface Tasks {
  [key: string]: Task
}

interface PluginEvents {
  (action: 'after:screenshot', function_: (details: { path: string }) => void): void
  (action: 'task', tasks: Tasks): void
}

module.exports = (on: PluginEvents, config = {}) => {
  addMatchImageSnapshotPlugin(on, config)
}
