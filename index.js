var { Mark } = require('@tiptap/core');
const NuxtLink = Mark.create({
    name: 'NuxtLink',
    priority: 1000,
    defaultOptions:{},
    content: 'paragraph*',
    addAttributes(){
        return {
            to:{
                default: null
            }
        }
    },
    renderHTML({ HTMLAttributes }) {
        return ['nuxt-link', HTMLAttributes, 0]
    },
    parseHTML() {
        return [
            { tag: 'nuxt-link[to]' },
        ]
    },
    addCommands(){
        return {
            setNuxtLink: attributes => ({ commands }) => {
                return commands.setMark('NuxtLink', attributes)
            },
            toggleNuxtLink: attributes => ({ commands }) => {
                return commands.toggleMark('NuxtLink', attributes)
            },
            unsetNuxtLink: () => ({ commands }) => {
                return commands.unsetMark('NuxtLink')
            },
        }
    }
})
module.exports.NuxtLink = NuxtLink;