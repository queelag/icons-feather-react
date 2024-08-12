import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCommandElement } from '@aracna/icons-feather-web/elements/command-element'

export const IconFeatherCommand: ElementComponent<IconFeatherCommandElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCommandElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-command', IconFeatherCommandElement)
