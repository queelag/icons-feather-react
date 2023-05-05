import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherUserMinusElement } from '@aracna/icons-feather-web/elements/user-minus-element.js'

export const IconFeatherUserMinus: ElementComponent<IconFeatherUserMinusElement, IconProps> = createBaseElementComponent<
  IconFeatherUserMinusElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-user-minus', IconFeatherUserMinusElement)
