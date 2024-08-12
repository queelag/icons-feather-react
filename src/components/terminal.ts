import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherTerminalElement } from '@aracna/icons-feather-web/elements/terminal-element'

export const IconFeatherTerminal: ElementComponent<IconFeatherTerminalElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTerminalElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-terminal', IconFeatherTerminalElement)
