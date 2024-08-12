import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherUserMinusElement } from '@aracna/icons-feather-web/elements/user-minus-element'

export const IconFeatherUserMinus: ElementComponent<IconFeatherUserMinusElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherUserMinusElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-user-minus', IconFeatherUserMinusElement)
