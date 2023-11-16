import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherUserMinusElement } from '@aracna/icons-feather-web/elements/user-minus-element'

export const IconFeatherUserMinus: ElementComponent<IconFeatherUserMinusElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherUserMinusElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-user-minus', IconFeatherUserMinusElement)
