import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherEditElement } from '@aracna/icons-feather-web/elements/edit-element'

export const IconFeatherEdit: ElementComponent<IconFeatherEditElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherEditElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-edit', IconFeatherEditElement)
