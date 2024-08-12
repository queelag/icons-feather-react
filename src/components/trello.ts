import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherTrelloElement } from '@aracna/icons-feather-web/elements/trello-element'

export const IconFeatherTrello: ElementComponent<IconFeatherTrelloElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTrelloElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-trello', IconFeatherTrelloElement)
