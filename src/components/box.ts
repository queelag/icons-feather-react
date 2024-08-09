import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherBoxElement } from '@aracna/icons-feather-web/elements/box-element'

export const IconFeatherBox: ElementComponent<IconFeatherBoxElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBoxElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-box', IconFeatherBoxElement)
