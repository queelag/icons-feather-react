import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTagElement } from '@aracna/icons-feather-web/elements/tag-element'

export const IconFeatherTag: ElementComponent<IconFeatherTagElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTagElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-tag', IconFeatherTagElement)
