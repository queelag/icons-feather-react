import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherUserElement } from '@aracna/icons-feather-web/elements/user-element'

export const IconFeatherUser: ElementComponent<IconFeatherUserElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherUserElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-user', IconFeatherUserElement)
