import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherDeleteElement } from '@aracna/icons-feather-web/elements/delete-element'

export const IconFeatherDelete: ElementComponent<IconFeatherDeleteElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherDeleteElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-delete', IconFeatherDeleteElement)
