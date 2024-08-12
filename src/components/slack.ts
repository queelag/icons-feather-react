import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherSlackElement } from '@aracna/icons-feather-web/elements/slack-element'

export const IconFeatherSlack: ElementComponent<IconFeatherSlackElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSlackElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-slack', IconFeatherSlackElement)
