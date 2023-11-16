import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherUserCheckElement } from '@aracna/icons-feather-web/elements/user-check-element'

export const IconFeatherUserCheck: ElementComponent<IconFeatherUserCheckElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherUserCheckElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-user-check', IconFeatherUserCheckElement)
