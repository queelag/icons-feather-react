import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherBoxElement } from '@aracna/icons-feather-web/elements/box-element'

export const IconFeatherBox: ElementComponent<IconFeatherBoxElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBoxElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-box', IconFeatherBoxElement)
