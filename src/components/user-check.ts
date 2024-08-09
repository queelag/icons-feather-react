import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherUserCheckElement } from '@aracna/icons-feather-web/elements/user-check-element'

export const IconFeatherUserCheck: ElementComponent<IconFeatherUserCheckElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherUserCheckElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-user-check', IconFeatherUserCheckElement)
