import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherTypeElement } from '@aracna/icons-feather-web/elements/type-element'

export const IconFeatherType: ElementComponent<IconFeatherTypeElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTypeElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-type', IconFeatherTypeElement)
