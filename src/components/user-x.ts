import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherUserXElement } from '@aracna/icons-feather-web/elements/user-x-element'

export const IconFeatherUserX: ElementComponent<IconFeatherUserXElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherUserXElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-user-x', IconFeatherUserXElement)
