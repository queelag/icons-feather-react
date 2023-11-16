import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherColumnsElement } from '@aracna/icons-feather-web/elements/columns-element'

export const IconFeatherColumns: ElementComponent<IconFeatherColumnsElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherColumnsElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-columns', IconFeatherColumnsElement)
