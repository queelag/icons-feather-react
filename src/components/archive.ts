import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherArchiveElement } from '@aracna/icons-feather-web/elements/archive-element'

export const IconFeatherArchive: ElementComponent<IconFeatherArchiveElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherArchiveElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-archive', IconFeatherArchiveElement)
